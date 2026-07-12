// 1 take the button with id "generateBtn"
const generateBtn = document.getElementById('generateBtn');

// 2 Take the div with id "result"
const result = document.getElementById('result');

console.log('generateBtn', generateBtn);
// console.log(result);

// 3 Add an Event Listener on the button with id "generateBtn"
// generateBtn.addEventListener('click', function () {
//   // console.log(this)
//   console.log('Button Clicked')
// })

// 4 Change Text
// generateBtn.addEventListener('click', function () {
//   result.innerText = 'Loading...'
// })

// 10.1.1
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
// 10.1.2
const API_KEY = 'YOUR_API_KEY';

// 10 Async Await
generateBtn.addEventListener('click', async function () {
  console.log('Button Clicked');
  result.innerText = 'Loading...';

  // 10.2
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // Authorization: 'Bearer YOUR_API_KEY'
      Authorization: `Bearer ${API_KEY}`
    },
    // JSON in body
    /* body: {
      "model": "llama-3.3-70b-versatile",
      "messages": [{
        "role": "user",
        "content": "Explain the importance of fast language models"
      }]
    } */
    // JavaScript in Body
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{
        role: 'user',
        content: 'Explain the importance of fast language models'
      }]
    })
  });

  // console.log(response);
  const data = await response.json();
  console.log(data);

  result.innerText = data.choices[0].message.content;
})

// 5 API URL
// const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// 6 API KEY
// const API_KEY = 'YOUR_API_KEY';

// 7 prompt
const prompt = 'Tell me a funny programming joke';

// 8 Fetch from API
// const response = fetch(API_URL);
// console.log(response);

// 9 Postman