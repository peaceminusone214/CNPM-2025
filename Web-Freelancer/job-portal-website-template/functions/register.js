document.getElementById("register-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
  
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    const result = await res.json();
  
    if (res.ok) {
      alert(result.message); // Thành công
    } else {
      alert("Lỗi: " + result.message); // Hiển thị lỗi
    }
  });
  