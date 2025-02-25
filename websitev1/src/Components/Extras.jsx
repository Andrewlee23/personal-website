function Extras() {
    const portfolioLink = "https://www.pricecharting.com/offers?seller=nvlghbl5kh27qhoghcoi5kw63m&status=collection"; 
    const discordServer = "https://discord.gg/28NxrjRPT5"; 
    return (
      <section id="extras" className="py-10 bg-mutedgrey text-white text-center">
        <h2 className="text-5xl font-pixel">🎮 Extras</h2>
        <p className="mt-4 max-w-4xl mx-auto text-2xl text-gray-300 font-pixel">
          I'm a huge fan of collecting Pokemon cards! View my portfolio and join my Pokemon tcg Discord server here!
        </p>
        <div className="mt-4 flex justify-center space-x-6">
        <a href={portfolioLink} className="text-2xl font-pixel text-blue-400 hover:underline">
            PriceCharting portfolio →
        </a>
        <a href={discordServer} className="text-2xl font-pixel text-blue-400 hover:underline">
            Discord server invite link →
        </a>
        </div>

        <p className="mt-4 max-w-4xl mx-auto text-2xl text-gray-300 font-pixel">
          I'm pretty active on Discord, if you want to have a chat about anything, add me here!
        </p>
        <p className="mt-4 max-w-4xl mx-auto text-3xl text-blue-400 font-pixel">
          _lemonade.
        </p>

      </section>
    );
  }
  
  export default Extras;
  