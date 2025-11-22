# Welcome to your Expo app 👋
-- DEV with Thien Bao 97 --



Getting started with the game logic 

- Cho phép người dùng nhập số từ 0-99 ⇒ confirm chuyển đến Game Screen
- Hàm random - random ra một số (logic chỗ này ??? ) (Ngẫu nhiên)
- Game Screen - hiển thị random number
- button (high, low) - random lại number
- Round number - số round đã chạy random number
- List các random number
- check gameover  (logic khi game over là?)
- game over screen : button re start game

Handling User Input & Showing an Alert Dialog
- Cho người dùng nhập - Lưu giá trị nhập useState
- button reset ⇒ cho phép reset giá trị được lưu ở useState
- button confirm ⇒ check giá trị nhập → chỉ cho phép nhận từ 0- 99

Switching Screen Programmatically 
- Logic Switching Screen Programmatically
    - Đã được react native hỗ trợ - expo router
    - Nhưng dùng logic thủ công để chuyển màn hình
        - Xác định vùng chưa logic hiển thị các screen
        - ĐIều kiện gì để chuyển màn hình ⇒ khi confirm số hợp lệ thì sẽ chuyển đến trang game Screen (xác định được UserNumber)
        - Có nhiều màn hình - làm sao kiểm soát chuyển đến màn nào?
            - khai báo biến chưa screen được hiển thị
            - check điều kiện để gán lại screen - và cho hiển thị screen đó

Starting Work on the game Screen - Done

Respecting Device Screen restrictions with the safeAreaView - Done

Creating a title component - Done

managing colors globally - Done 

creating, Using & Displaying Random Numbers - Done

Adding control Buttons (”+” & “-”) to the App
    Logic:
        - Máy random (number guess)
        - Button gợi ý máy random gần hơn so với userNumber
        - Khi click vào các button 
            - Máy sẽ random lại theo tham số mới được truyền vào dựa vào gợi ý khi nhấn button
            - Sẽ thông báo nếu user cố tình gợi ý sai
        - styling area.
checking for “Game Over”
    Logic:
        - Điều kiện để chuyển sang màn hình game over
        - Khi máy tính đoán số theo gợi ý đến một lúc nó sẽ đoán được đúng số
        - điều kiện đúng số là --  userNumber === guessNumber - Phương án dùng useEffect để thực thi việc kiểm tra (khi dependencie thay đổi useEffect sẽ được thực thi)
        - Khi đoán đúng số rồi thì phải chuyển sang màn hình game over
        - Hiểu Flow khi máy guess number - màn hình game screen sẽ như nào? 
        
improving the game screen visuals

Using “Cascading styles”

Working with Icons

Adding & Using Custom Fronts with React Native Apps

Adding a (Foreground) Image

Using & styling Nested Component

Adding Logic to reStart Games & Display a Summary Screen

Logging Game Rounds

Outputting Log Data with FlatList 

Styling the game Round Logs 

Finishing Touches

