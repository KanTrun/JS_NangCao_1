// HÀM FUNCTION
// Ví dụ 1:
    // function tong(a, b) {
    //     return a + b;
    // }
    // var ketQua = tong(10, 20);
    // console.log(ketQua);

// Ví dụ 2:
    // function tong(a, b, c, d) {
    //     return a + b + c + d;
    // }
    // var ketQua = tong(10, 20, 30, 40);
    // console.log(ketQua);

// ----------------------------------
// DECLARATION FUNCTION ( Hàm định nghĩa )
// Có đối tượng là Arguments ( giống như là chứa các giá trị như mảng )
// Có tính Hoisting - Có thể khai báo hàm trước khi khai báo hàm
    // function tong() {
    //     let tong = 0;
    //     for(const item of arguments) {
    //         tong += item;
    //     }
    //     return tong;
    // }
    // var ketQua = tong(10, 20, 30, 40);
    // console.log(ketQua); // hai dòng này có thể nằm trên hàm con

// ------------------------------------
// EXPRESSION FUNCTION (Hàm biểu thức)
// Có đối tượng là Arguments
// Nếu khai báo hàm trước khi khai báo thì nó sẽ lỗi
    // var tong = function () {
    //     let tong = 0;
    //     for(const item of arguments) {
    //         tong += item;
    //     }
    //     return tong;
    // }
    // var ketQua = tong(10, 20, 30, 40);
    // console.log(ketQua); //nếu hai dòng này nằm trên hàm con thì nó lỗi ngay

// ----------------------------------
// ARROW FUNCTION (Hàm mũi tên)
// Không có đối tượng Arguments
// Không có tính Hoisting ( Nếu gọi hàm trước lúc khai báo thì hàm sẽ gặp lỗi )
    // var tong = (...arguments) => { // ... có nghĩa là giải các phần tử trong mảng
    //     let tong = 0;

    //     for(const item of arguments) {
    //         tong += item;
    //     }

    //     return tong;
    // }

    // var ketQua = tong(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
    // console.log(ketQua);

    // setTimeout(() => {
    //     console.log("OK");
    // }, 3000);

// ---------------------------------------
// Ví dụ về hàm
// Tính tổng các số chẵn từ 1 đến 10
    // var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // const tongChan = (array) => {
    //     let tong = 0;

    //     for(let i = 0; i < array.length; i++) {
    //         if(array[i] % 2 == 0) {
    //             tong += array[i];
    //         }
    //     }
    //     return tong;
    // }
    // const result = tongChan(mang);
    // console.log(result);

// Viết chương trình cho người dùng nhập n > 0 sau đó dựa vào n tính:
// bieuThuc = 1/n + 2/n + ... + n/n
    // const bieuThuc = (n) => {
    //     let tong = 0;
    //     for(let i = 1; i <= n; i++) {
    //         tong += i/n;
    //     }
    //     return tong;
    // }
    // let n;
    // do {
    //     n = parseInt(prompt("Nhập n: "));
    //     if(n < 0) {
    //         console.log("Vui lòng nhập n lớn hơn 0");
    //     } else {
    //         const result = bieuThuc(n);
    //         console.log(result);
    //     }
    // } while(n <= 0);

// ------------------------------------
// TRY CATCH
// Bắt lỗi một hàm, các hàm sau đó sẽ không bị ảnh hưởng từ lỗi
    //const a = 10;

    // try {
    //     console.log("a = " + a);
    // } catch(error) {
    //     console.log(error);
    // } finally {
    //     console.log("Luôn chạy vào đây");
    // } //Nếu không khai báo a thì nó sẽ báo lỗi ngay catch và
    // // các lệnh khác dưới nó vẫn chạy bình thường 

// ------------------------------------------------
// LÀM VIỆC VỚI OBJECT NÂNG CAO
// Thêm key vào một object
    // var infoUser = {   //kiểu dữ liệu tham chiếu nên sử dụng const được
    //     name: "Kan"
    // };
    // // tham trị như number, string,... không dùng được const vì nó có thay đổi dữ liệu
    // console.log(infoUser);

    // //Cách 1
    // // infoUser.phone = "123";
    // // console.log(infoUser);
    // //Cách 2
    // infoUser["phone"] = "123";
    // console.log(infoUser);
    // infoUser["email"] = "kan@gmail.com"
    // console.log(infoUser);

// ------------------------------------------------
// Xóa một key khỏi OBJECT
    // var infoUser = {
    //     name: "Kan",
    //     phone: "123"
    // }
    // console.log(infoUser);
    // delete infoUser.phone; // xóa key phone
    // console.log(infoUser);

// -----------------------------------------------------
// LÀM VIỆC VỚI ARRAY NÂNG CAO
// FOREACH()
// Cú pháp: arr.forEach(function(currentValue, index, array)) 
// currentValue: giá trị hiện tại của mảng theo từng vòng lặp
// index: vị trí trong mảng bắt đầu từ 0
// Duyệt qua mỗi phần tử của mảng và thực hiện hành động nào đó
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // let sum = 0;

    // numbers.forEach((item) => { // dùng hàm mũi tên
    //     sum += item;
    // })
    // console.log(sum);

    // numbers.forEach((item, index) => {
    //     numbers[index] = item + 1;
    // })
    // console.log(numbers); // xuất ra các phần tử mảng + 1

    // numbers.forEach((_, index) => { // khi không muốn sử dụng item
    //     console.log(index);
    // })

// -------------------------------------------------
// EVERY()
// Cú pháp: arr.every(function(currentValue, index, array))
// Kiểm tra các phần tử trong mảng có thỏa mãn một điều kiện nào đó
    // const monHoc = [
    //     {
    //         ten: "Toán",
    //         diem: 8.6
    //     },
    //     {
    //         ten: "Lý",
    //         diem: 9.2
    //     },
    //     {
    //         ten: "Hóa",
    //         diem: 8.5
    //     },
    //     {
    //         ten: "Tin",
    //         diem: 7.8
    //     },
    // ]

    // const kiemTra = monHoc.every((item) => {
    //     return item.diem >= 8;
    // })
    // console.log(kiemTra); // xuất ra false vì có một giá trị diem dưới 8

// ----------------------------------------------
// SOME()
// Cú pháp: arr.some(function(currentValue, index, array))
// Kiểm tra các phần tử, chỉ cần một phần tử thỏa mãn là được trả về true
    // const monHoc = [
    //     {
    //         ten: "Toán",
    //         diem: 8.6
    //     },
    //     {
    //         ten: "Lý",
    //         diem: 9.2
    //     },
    //     {
    //         ten: "Hóa",
    //         diem: 8.5
    //     },
    //     {
    //         ten: "Tin",
    //         diem: 7.8
    //     },
    // ]

    // const kiemTra = monHoc.some((item) => {
    //     return item.diem > 9;
    // })

    // console.log(kiemTra);

// ------------------------------------------------
// FIND()
// Cú pháp: arr.find(function(currentValue, index, array))
// Tìm xem trong mảng có giá trị giống với giá trị đang cần tìm hay không nhưng chỉ tìm được một phần tử
    // const monHoc = [
    //     {
    //         ten: "Toán",
    //         diem: 8.6
    //     },
    //     {
    //         ten: "Lý",
    //         diem: 9.2
    //     },
    //     {
    //         ten: "Hóa",
    //         diem: 8.5
    //     },
    //     {
    //         ten: "Tin",
    //         diem: 7.8
    //     },
    // ]

    // const kiemTra = monHoc.find((item) => {
    //     return item.ten == "Toán";
    // });

    // console.log(kiemTra.ten);

// -----------------------------------------------
// FILTER()
// Cú pháp: arr.filter(function(currentValue, index, array))
// Giống hàm find() nhưng tìm được nhiều phần tử
    // const monHoc = [
    //     {
    //         ten: "Toán",
    //         diem: 8.6
    //     },
    //     {
    //         ten: "Lý",
    //         diem: 9.2
    //     },
    //     {
    //         ten: "Hóa",
    //         diem: 8.5
    //     },
    //     {
    //         ten: "Tin",
    //         diem: 7.8
    //     },
    // ]

    // const kiemTra = monHoc.filter((item) => {
    //     return item.ten == "Toán";
    // });

    // console.log(kiemTra);

// -----------------------------------------------
// MAP()
// Cú pháp: arr.map(function(currentValue, index, array))
// Lặp qua từng phần tử mảng, trả về một mảng mới, giá trị trả về quyết định bằng khóa return
    // const monHoc = [
    //     {
    //         ten: "Toán",
    //         diem: 8.6
    //     },
    //     {
    //         ten: "Lý",
    //         diem: 9.2
    //     },
    //     {
    //         ten: "Hóa",
    //         diem: 8.5
    //     },
    //     {
    //         ten: "Tin",
    //         diem: 7.8
    //     },
    // ]

    // console.log(monHoc);

    // const kiemTra = monHoc.map((item) => {
    //     return item.diem;
    //     //return "a"; // giá trị phụ thuộc vào return
    // })
    // console.log(kiemTra);

// ------------------------------------------------
// REDUCE()
// Cú pháp: arr.reduce(function(accumulator, currentValue, currentIndex, array) { }, initialValue)
// accumulato: giá trị của lệnh return cho mỗi lần lặp
// initialValue: giá trị khởi tạo ban đầu (không bắt buộc)
    // const numbers = [1, 2, 3, 4];

    // const sum = numbers.reduce((total, item) => {
    //     console.log(total); // ra 1
    //     console.log(item); // ra 2
    //     console.log("----------");
    //     return total + item; // total ra 3 và lặp tiếp total 3 và item 3
    // }) // nếu không gán giá trị khởi tạo nó mặc định lấy giá trị trong phần tử đầu tiên
    // // nếu gán giá trị khởi tạo (total) là 1 thì item sẽ là 1 trước
    // console.log(sum);

    //     const monHoc = [
    //     {
    //         ten: "Toán",
    //         diem: 8.6
    //     },
    //     {
    //         ten: "Lý",
    //         diem: 9.2
    //     },
    //     {
    //         ten: "Hóa",
    //         diem: 8.5
    //     },
    //     {
    //         ten: "Tin",
    //         diem: 7.8
    //     },
    // ]

    // let tongDiem = monHoc.reduce((total, item) => {
    //     return total + item.diem/ monHoc.length; // nó sẽ ra lỗi vì không thể lấy nguyên một cái object total + với giá trị
    // }, 0); // thế nên phải cho nó giá trị khởi tạo ban đầu là 0 để tính tổng điểm trung bình
    
    // console.log(tongDiem);

// Tổng kết: 
// + Hàm forEach(), every(), some(), find(), filter(), map(), reduce()






