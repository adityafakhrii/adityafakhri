const fs = require('fs')

const contentPath = 'd:/Projects/adityafakhri/app/services/content.tsx'
let content = fs.readFileSync(contentPath, 'utf8')

// We will split the `return <TranslatedContent renderContent={({t}) => ( ... )}/>`
// The basic idea is just to keep it in a single file? Wait. Writing a precise parser script
// for this might fail. Let's just create a simplified version of `ServicesContent` and replace the file.
