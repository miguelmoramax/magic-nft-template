import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/lib/UserContext";
import { loginViaMagicConnect, magic } from "@/lib/magic";

export default function ConnectOrMint({}) {
  const [user] = useContext(UserContext);

  // only show this component when a user is connected, and they are low on balance
  // if (!user?.address) return <></>;

  return (
    <section className="space-x-4">
      {user?.address ? (
        <div>
          <button className="inline-flex space-x-3 text-xl btn-outline">
            Mint a Magic Carpet NFT
          </button>

          <p>
            Your ETH balance is <span className="">{user?.balance} ETH</span>
          </p>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              magic.wallet
                .connectWithUI()
                .then((res) => {
                  (async () => {
                    await loginViaMagicConnect().then((data) => setUser(data));
                  })();
                })
                .catch((err) => console.log(err));
            }}
            className="inline-flex space-x-3 text-xl btn-outline"
          >
            <span>Connect with</span>
            <img src="/logo.svg" className="h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
