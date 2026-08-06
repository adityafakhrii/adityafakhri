/**
 * @jest-environment node
 */
import { escapeHtml, checkHoneypot, validateOrigin, applyRateLimit } from "@/lib/api-utils"
import { NextRequest } from "next/server"

describe("api-utils", () => {
  describe("escapeHtml", () => {
    it("should escape special HTML characters to prevent XSS", () => {
      const input = '<script>alert("xss")</script> & \'hello\''
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; &amp; &#039;hello&#039;'
      expect(escapeHtml(input)).toBe(expected)
    })

    it("should return string unchanged if no special characters are present", () => {
      const input = "Aditya Fakhri"
      expect(escapeHtml(input)).toBe("Aditya Fakhri")
    })
  })

  describe("checkHoneypot", () => {
    it("should return null if honeypot field is empty or missing", () => {
      expect(checkHoneypot({ name: "John", _hp: "" })).toBeNull()
      expect(checkHoneypot({ name: "John" })).toBeNull()
    })

    it("should return a 200 response if honeypot field is filled by a bot", async () => {
      const result = checkHoneypot({ name: "Spammer", _hp: "http://spam.site" })
      expect(result).not.toBeNull()
      expect(result?.status).toBe(200)
      const data = await result?.json()
      expect(data).toEqual({ success: true })
    })
  })

  describe("validateOrigin", () => {
    const originalEnv = process.env.NODE_ENV

    afterEach(() => {
      ;(process.env as any).NODE_ENV = originalEnv
    })

    it("should skip validation in development mode", () => {
      ;(process.env as any).NODE_ENV = "development"
      const req = new NextRequest("http://localhost:3000/api/contact", {
        headers: { origin: "http://malicious.site" },
      })
      expect(validateOrigin(req)).toBeNull()
    })

    it("should reject requests with invalid origin in production mode", async () => {
      ;(process.env as any).NODE_ENV = "production"
      const req = new NextRequest("https://adityafakhri.com/api/contact", {
        headers: { origin: "https://evil-site.com" },
      })
      const result = validateOrigin(req)
      expect(result).not.toBeNull()
      expect(result?.status).toBe(403)
    })

    it("should allow requests from adityafakhri.com in production mode", () => {
      ;(process.env as any).NODE_ENV = "production"
      const req = new NextRequest("https://adityafakhri.com/api/contact", {
        headers: { origin: "https://adityafakhri.com" },
      })
      expect(validateOrigin(req)).toBeNull()
    })
  })

  describe("applyRateLimit", () => {
    it("should allow requests within the limit and block when exceeded", async () => {
      const createReq = (ip: string) =>
        new NextRequest("http://localhost:3000/api/contact", {
          headers: { "x-forwarded-for": ip },
        })

      const testIp = "192.168.1.100"

      // Request 1: Allowed
      expect(applyRateLimit(createReq(testIp), 2, 60000)).toBeNull()
      // Request 2: Allowed
      expect(applyRateLimit(createReq(testIp), 2, 60000)).toBeNull()
      // Request 3: Exceeded -> 429
      const blockedRes = applyRateLimit(createReq(testIp), 2, 60000)
      expect(blockedRes).not.toBeNull()
      expect(blockedRes?.status).toBe(429)
      const data = await blockedRes?.json()
      expect(data?.error).toContain("Too many requests")
    })
  })
})
