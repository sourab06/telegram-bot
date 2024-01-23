//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
const {Telegraf}= require('telegraf');
const {message}= require('telegraf/filters');
require('dotenv').config();
//const {chatgptapi}=import('chatgpt');

const bot = new Telegraf(process.env.BOT_TOKEN)
//const api = new chatgptapi({ apikey:process.env.OPENAI_API_KEY})
bot.start((ctx) => ctx.reply('Welcome'))
bot.on(message('text'), (ctx) => ctx.reply('Hello World'));
/*const api = new chatgptapi({
    apiKey: process.env.OPENAI_API_KEY,
    completionParams: {
      model: 'gpt-4',
      temperature: 0.5,
      top_p: 0.8
    }
  })
  */
bot.launch()

/*async function example() {
   
    const { ChatGPTAPI } = await import('chatgpt')
    // You can also try dynamic importing like this:
    // const importDynamic = new Function('modulePath', 'return import(modulePath)')
    // const { ChatGPTAPI } = await importDynamic('chatgpt')
  
    const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY })
  
    const res = await api.sendMessage('Hello World!')
    console.log(res.text)
  }
  */