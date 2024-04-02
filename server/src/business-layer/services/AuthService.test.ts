import { auth } from "business-layer/security/Firebase"
import AuthService from "./AuthService"

describe("AuthService Integration Tests", () => {
  it("deletes a user", async () => {
    await auth.createUser({ uid: "test" })
    new AuthService().deleteUser("test")
    let user
    try {
      user = await auth.getUser("test")
    } catch {}
    expect(user).toBe(undefined)
  })
})

describe("AuthService Unit Tests", () => {
  it("creates a user", async () => {
    const createdUser = await new AuthService().createUser("test@gmail.com")
    let user
    try {
      user = await auth.getUserByEmail("test@gmail.com")
    } catch {}
    expect(createdUser).toEqual(user)
  })
})
