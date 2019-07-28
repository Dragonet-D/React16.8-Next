async function test() {
  const Redis = require('ioredis');

  const redis = new Redis({
    port: 6739
  });

  const keys = await redis.keys('*');
  console.log(keys);
}

test();
