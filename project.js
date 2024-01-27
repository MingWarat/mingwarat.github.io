


// กด esc ขึ้นไปด้านบนสุด //
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        window.scrollTo(0, 0);  
    }
});

// เพิ่ม event listener สำหรับการกดปุ่มย้อนกลับบนมือถือ
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('popstate', function(event) {
        // ตรวจสอบว่าเป็นการกดปุ่มย้อนกลับ
        if (event.state && event.state.scrollTop) {
            // ให้หน้าเว็บขึ้นไปที่ตำแหน่งที่กำหนด
            window.scrollTo(0, event.state.scrollTop);
        }
    });
});

// เพิ่ม event listener สำหรับการ scroll
document.addEventListener('scroll', function() {
    // บันทึกตำแหน่ง scroll ปัจจุบันเมื่อมีการ scroll
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    history.replaceState({ scrollTop: scrollTop }, ''); 
});

document.addEventListener('keydown', function(event) {
    // ตรวจสอบว่าปุ่มที่ถูกกดคือ เลข 1
    if (event.key === '1') {
      // นำทางไปยังหัวข้อหน้าเว็บที่ต้องการ
      window.location.href = '#award';
    }
  });

document.addEventListener('keydown', function(event) {
    // ตรวจสอบว่าปุ่มที่ถูกกดคือ เลข 2
    if (event.key === '2') {
      // นำทางไปยังหัวข้อหน้าเว็บที่ต้องการ
      window.location.href = '#Activity';
    }
  });