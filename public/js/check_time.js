
        // Kiểm tra thời gian để hiển thị nội dung
        window.addEventListener('load', function() {
            const now = new Date();
            const targetTime = new Date('2025-09-14T22:30:00+07:00'); // 10h tối 14/09/2025

            if (now < targetTime) {
                document.getElementById('waiting-message').style.display = 'block';
                document.getElementById('main-content').style.display = 'none';
            } else {
                document.getElementById('waiting-message').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
                
                // Khởi tạo PhotoPile và các hiệu ứng khác
                $(function(){
                    PhotoPile().scatter();
                });
                
                // Phát audio
                const audio = document.getElementById('bgmMusic');
                audio.play().catch(function(error) {
                    console.log("Tự động phát bị chặn: ", error);
                });
            }

            // Xử lý sự kiện click cho heart
            $(document).ready(function(){
                $('body').on("click",'.heart',function(){
                    $(this).css("background-position","");
                    $(this).addClass("heartAnimation");
                    $(this).addClass("clickH");
                    $('#pClick').addClass('tC');
                    setTimeout(function () {
                        $(".heart").removeClass('heartAnimation');
                    }, 1000);
                });
            });
        });