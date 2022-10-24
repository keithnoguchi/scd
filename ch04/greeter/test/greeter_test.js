const GreeterContract = artifacts.require("Greeter");

contract("Greeter", (accounts) => {
    it("has been deployed successfully", async () => {
        const greeter = await GreeterContract.deployed();
        assert(greeter, "contract was not deployed");
    });

    describe("greet()", () => {
        it("returns 'Hello, World!'", async () => {
            const greeter = await GreeterContract.deployed();
            const want = "Hello, World!";
            const got = await greeter.greet();
            assert.equal(got, want, "greeted with 'Hello, World!'");
        });
    });

    describe("owner()", () => {
        it("returns the address of the owner", async () => {
            const greeter = await GreeterContract.deployed();
            const owner = await greeter.owner();

            assert(owner, "the current owner");
        });

        it("matches the address that originally deployed the contract", async () => {
            const greeter = await GreeterContract.deployed();
            const owner = await greeter.owner();
            const want = accounts[0];

            assert.equal(owner, want, "matches address used to deploy contract");
        });
    });
});

contract("Greeter: update greeting", (accounts) => {
    describe("setGreeting(string)", () => {
        describe("when message is sent by the owner", () => {
            it("sets greeting to passed in string", async () => {
                const greeter = await GreeterContract.deployed();
                const want = "Hi there!";

                await greeter.setGreeting(want);
                const got = await greeter.greet();
                assert.equal(got, want, "greeting was not updated");
            });
        });

        describe("when message is sent by another account", () => {
            it("does not set the greeting", async () => {
                const greeter = await GreeterContract.deployed();

                try {
                    await greeter.setGreeting("Not the owner", { from: accounts[1] });
                } catch(err) {
                    const want = "Ownable: caller is not the owner";
                    assert.equal(err.reason, want, "greeting should not update");
                    return;
                }
                assert(false, "greeting should not update");
            });
        });
    });
});
