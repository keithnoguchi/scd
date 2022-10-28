const Greeting = artifacts.require("Greeting");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Greeting", function (accounts) {
  it("has been deployed successfully", async () => {
      const greeting = await Greeting.deployed();
      assert(greeting, "contract was not deployed");
  });

  describe("greet()", () => {
      it("returns 'Hello, World!'", async () => {
          const greeter = await Greeting.deployed();
          const want = "Hello, World!";
          const got = await greeter.greet();
          assert.equal(got, want, "greeted with 'Hello, World!'");
      });
  });
});

contract("Greeter: update greeting", (accounts) => {
    describe("setGreeting(string)", () => {
        describe("when message is sent by the owner", () => {
            it("sets greeting to passed in string", async () => {
                const greeter = await Greeting.deployed();
                const want = "Hi there!";

                await greeter.setGreeting(want);
                const got = await greeter.greet();
                assert.equal(got, want, "greeting was not updated");
            });
        });
    });
});
