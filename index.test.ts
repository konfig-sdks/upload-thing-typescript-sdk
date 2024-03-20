import { UploadThing } from "./index";

describe("upload-thing-typescript-sdk", () => {
    it("initialize client", async () => {
        const uploadthing = new UploadThing({
            apiKey: "API_KEY",
        });
    });
});
