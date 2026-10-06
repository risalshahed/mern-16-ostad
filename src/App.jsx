function App() {
  const handlePayment = async () => {
    const res = await fetch('http://localhost:5000/pay', {
      method: 'POST'
    })
    
    const data = await res.json();
    // console.log(data);
    window.location.href = data.paymentUrl;
  }


  return (
    <div>
      <h1>
        SSL Commerz Demo
      </h1>

      <button onClick={handlePayment}>
        Pay 100 BDT
      </button>
    </div>
  )
}

export default App;