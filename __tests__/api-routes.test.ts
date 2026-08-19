/**
 * @jest-environment node
 */
import { POST as contactPOST } from "@/app/api/contact/route"
import { POST as feedbackPOST } from "@/app/api/feedback/route"
import { NextRequest } from "next/server"

describe("API Routes Integration Tests", () => {
  describe("POST /api/contact", () => {
    it("should return 400 for invalid payload", async () => {
      const req = new NextRequest("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { origin: "https://adityafakhri.id" },
        body: JSON.stringify({ name: "A" }), // Name too short
      })
      const res = await contactPOST(req)
      expect(res.status).toBe(400)
      const data = await res.json()
      expect(data.error).toBe("Invalid payload")
    })

    it("should intercept bot submissions via honeypot field (_hp)", async () => {
      const req = new NextRequest("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { origin: "https://adityafakhri.id" },
        body: JSON.stringify({
          name: "Spam Bot",
          email: "bot@spam.com",
          subject: "Cheap Viagra Online",
          message: "Buy cheap products now on our website",
          _hp: "http://spam-link.com",
        }),
      })
      const res = await contactPOST(req)
      expect(res.status).toBe(200)
      const data = await res.json()
      // Silently accepted to fool bots without sending email
      expect(data).toEqual({ success: true })
    })
  })

  describe("POST /api/feedback", () => {
    it("should return 400 for invalid feedback payload", async () => {
      const req = new NextRequest("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: { origin: "https://adityafakhri.id" },
        body: JSON.stringify({ name: "Aditya" }), // Missing required fields
      })
      const res = await feedbackPOST(req)
      expect(res.status).toBe(400)
      const data = await res.json()
      expect(data.error).toBe("Invalid payload")
    })

    it("should intercept bot feedback submissions via honeypot", async () => {
      const req = new NextRequest("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: { origin: "https://adityafakhri.id" },
        body: JSON.stringify({
          name: "Bot User",
          email: "bot@spam.com",
          city: "Jakarta",
          occupation: "Bot",
          topic: "AI",
          feedback: "Great session! Highly recommended for everyone.",
          ratingMastery: 5,
          ratingCommunication: 5,
          ratingOverall: 5,
          _hp: "filled_by_bot",
        }),
      })
      const res = await feedbackPOST(req)
      expect(res.status).toBe(200)
      const data = await res.json()
      expect(data).toEqual({ success: true })
    })
  })
})
