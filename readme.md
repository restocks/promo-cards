# restocks-promo-cards

want to make promo cards with random 5 digit characters on them? (this is set up for [moo.com](https://www.moo.com/share/9kpycq))

cool. you're in the right place.


### how?

1. fill out `config.js` with a postgres url. create a table in your db called `codes` and make a text column called `code` in that column.

2. edit the example card (or don't). there's a png that the script uses and you can also edit the .sketch file if you're so inclined. if you need to make a front you can probably just make a copy of the back and edit it.

3. check the # of cards you want to make also in config

4. `npm install; node codes.js`

5. you can order these cards at moo.com. [use my ref link for 10% off your first purchase.](https://www.moo.com/share/9kpycq)

you should be set

### example of what you can do with this

[![Restocks.io](https://cdn.restocks.io/cardex.png)](https://www.restocks.io)

### license

MIT