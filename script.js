const openBtn = document.getElementById('openBtn');
const card = document.getElementById('card');
const typedText = document.getElementById('typed-text');

const message = `Hey cutu,

I thought a lot about why I said I love you so early and here's what I know...

Maybe it's because I love your little habits.
I love your sleepy voice.
I love your laugh when you can't hold it in.
I love your hands.
I love your stories.
I love the way you care.
I love how silly you get when you feel safe.
I love your random thoughts.
I love your face.
I love the way you make the world feel less heavy.
I love your heart.
I love your weird moods.
I love your quiet.
I love your loud.
I love getting to know you.
I love missing you.
I love finding you in everything.

So I think...
I love you. ❤`;

openBtn.addEventListener('click', () => {
  card.classList.add('open');

  let index = 0;

  const interval = setInterval(() => {
    typedText.textContent = message.slice(0, index);
    index++;

    if (index > message.length) {
      clearInterval(interval);
    }
  }, 38);
});
