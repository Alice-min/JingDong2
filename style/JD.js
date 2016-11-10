/**
 * Created by Ibokan on 2016/7/28.
 */
//地址选择处行为
    window.onload=init;
function init() {
    //获取类名ie的兼容
    function getClassNames(classStr, tagName) {
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(classStr)
        } else {
            var nodes = document.getElementsByTagName(tagName), ret = [];
            for (i = 0; i < nodes.length; i++) {
                if (hasClass(nodes[i], classStr)) {
                    ret.push(nodes[i])
                }
            }
            return ret;
        }
    }
    function hasClass(tagStr, classStr) {
        var arr = tagStr.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == classStr) {
                return true;
            }
        }
        return false;
    }
    addresss();
    function addresss(){
        var cityname = document.getElementById('cityname');
        var a3 = document.getElementById('a3');
        var ii = a3.getElementsByTagName('b')[0];
        var a2 = document.getElementById('a2');
        var ct = document.getElementById('ct');
        var citys = document.getElementById('citys');
        var addli = citys.getElementsByTagName('li');
        var addi = citys.getElementsByTagName('i');
        var address = document.getElementById('address');
//地址栏
        var t1 = 0;
//鼠标在送至地址处时
        a3.onmouseover = function () {
            //m1方向，a3背景色边框,ul出现，
            ablock();
            //地址遍历
            for (var i = 0; i < addi.length; i++) {
                addli[i].onmouseover = function () {
                    for (var j = 0; j < addli.length; j++) {
                        if (t1 != j) {
                            if (this == addli[j]) {
                                addli[j].style.backgroundColor = "#F4F4F4";
                                addi[j].style.color = "#C81623";
                                //点击
                                addli[j].onclick = function () {
                                    for (var k = 0; k < addli.length; k++) {
                                        if (this == addli[k]) {
                                            addli[k].style.backgroundColor = "#C81623";
                                            addi[k].style.color = "#FFFFFF";
                                            //点击的内容传到addname;
                                            cityname.innerHTML = addi[k].innerHTML;
                                            t1 = k;
                                        }
                                        else {
                                            addli[k].style.backgroundColor = "";
                                            addi[k].style.color = "";
                                        }
                                    }
                                }
                            }
                            else {
                                addli[j].style.backgroundColor = "";
                                addi[j].style.color = "";
                            }
                        }

                    }
                };
            }
            ct.onmouseover = function () {
                ablock();
            };
            a3.onmouseout = function () {
                disablock();
            };
            //鼠标在地址选择时
            citys.onmouseover = function () {
                ablock();
            };
            //鼠标离开地址选择内容时
            citys.onmouseout = function () {
                disablock();
            };
        };
//m1方向，a3背景色边框,ul出现，
        function ablock() {
            ii.innerHTML = " ︿";
            citys.style.display = "block";
            a3.className = "a3 f1 a4";
            ct.style.display = "block";
        }

//m1方向，a3背景色边框,ul变回原来的样子，
        function disablock() {
            ii.innerHTML = " ﹀";
            citys.style.display = "";
            a3.className = "a3 f1";
            ct.style.display = "";

        }
    }
//我的京东 手机京东 关注京东  客户服务  网站导航  行为
    nav();
    function nav(){
        var myjda = document.getElementById('myjda');
        var myjd = document.getElementById('myjd');
        var phonejda = document.getElementById('phonejda');
        var phonejd = document.getElementById('phonejd');
        var focusjda = document.getElementById('focusjda');
        var focusjd = document.getElementById('focusjd');
        var service = document.getElementById('service');
        var servicea = document.getElementById('servicea');
        var netnava = document.getElementById('netnava');
        var netnav = document.getElementById('netnav');
        myjda.onmouseover = function () {
            myjd.style.display = "block";
        };
        myjda.onmouseout = function () {
            myjd.style.display = "";
        };
        phonejda.onmouseover = function () {
            phonejd.style.display = "block";
        };
        phonejda.onmouseout = function () {
            phonejd.style.display = "";
        };
        focusjda.onmouseover = function () {
            focusjd.style.display = "block";

        };
        focusjda.onmouseout = function () {
            focusjd.style.display = "";
        };
        servicea.onmouseover = function () {
            service.style.display = "block";
        };
        servicea.onmouseout = function () {
            service.style.display = "";
        };
        netnava.onmouseover = function () {
            netnav.style.display = "block";

        };
        netnava.onmouseout = function () {
            netnav.style.display = "";
        };
//购物车处行为
        var goodscara = document.getElementById('goodscara');
        var goodscar = document.getElementById('goodscar');
        goodscara.onmouseover = function () {
            goodscar.style.display = "block";
        };
        goodscara.onmouseout = function () {
            goodscar.style.display = "";
        };
    }
//左侧目录栏
leftMenu();
    function leftMenu(){
        var meun_left = document.getElementById("meun_left");
        var iispan = meun_left.getElementsByTagName("span");
        var b = document.getElementById("b");
        var m_lli = getClassNames("sp","li");
        var mr_tli = getClassNames("mr_tli","li");
        var mr_ti = getClassNames("mr_ti","i");
        var meun_right = getClassNames("meun_right","div");
        for(var z =0;z<mr_tli.length;z++){
            mr_tli[z].onmouseover = function(){
                for(var  i= 0;i<mr_tli.length;i++){
                    if(this==mr_tli[i]){
                        mr_tli[i].style.backgroundColor="#C81623";
                        mr_ti[i].style.backgroundColor="#B1191A";
                    }else {
                        mr_tli[i].style.backgroundColor="";
                        mr_ti[i].style.backgroundColor="";
                    }
                }
            }
            mr_tli[z].onmouseout = function(){
                for(var  i= 0;i<mr_tli.length;i++){

                        mr_tli[i].style.backgroundColor="";
                        mr_ti[i].style.backgroundColor="";

                }
            }
        }
        var sct;
        for(var i = 0;i<m_lli.length;i++){
            m_lli[i].onmouseover=function(){
                for(var j =0;j<m_lli.length;j++){
                var ss = m_lli[j].getElementsByTagName("s")
                    if(this == m_lli[j]){
                        m_lli[j].className="m_llili sp";
                        iispan[j].style.display="block"
//                      a标签内的字体样式变化
                        for(var i = 0;i<ss.length;i++){
                         ss[i].className="show2";
                        }
                        meun_right[j].style.display="block";
//                        右面高度变化
                        setInterval(function () {sct = document.documentElement.scrollTop || document.body.scrollTop; }, 1);
                            if (sct >= b.offsetTop) {
                                meun_right[j].style.top = (sct - b.offsetTop) + 'px';
                            }
                            else {
                                meun_right[j].style.top = -1 + 'px';
                            }
                    }else {
                        m_lli[j].className="m_lli sp";
                        iispan[j].style.display="none";
                        for(var i = 0;i<ss.length;i++){
                            ss[i].className="show1"
                        }
                        meun_right[j].style.display="";
                        
                    }
                }
            }
            m_lli[i].onmouseout=function(){
                for(var j = 0;j<m_lli.length;j++){
                    var ss = m_lli[j].getElementsByTagName("s")
                    if(this ==m_lli[j]){
                        m_lli[j].className="m_lli sp";
                        iispan[j].style.display="none";
                        for(var i = 0;i<ss.length;i++){
                            ss[i].className="show1"
                        }
                         meun_right[j].style.display="";
                    }
                }
            }
        }
    }
//大图滚动事件
    topPic();
    function topPic(){
        var ad_outer = document.getElementById('ad_outer');
        var ad_inner = document.getElementById('ad_inner');
        var ad_imgs = ad_inner.getElementsByTagName('img');
        var time1 = null;
        var num = 0;
//单个图片滚动事件
        function moveto(autonum) {
            if (time1) {
                clearInterval(time1);
            }
            time1 = setInterval(move, 35);
            //设置透明度变化
            var opt = 0.6;
            //兼容ie8;设置zindex
            var zix = -1;
            function move() {
                opt += 0.05;
                zix += 0.4;
                if (opt >= 1 && zix >= 1) {
                    opt = 1;
                    zix = 0;
                    clearInterval(time1);
                    for (var i = 0; i < ad_imgs.length; i++) {
                        ad_imgs[i].style.opacity = 0;
                        ad_imgs[i].style.zIndex = -1;
                    }
                }
                ad_imgs[autonum].style.opacity = opt;
                ad_imgs[autonum].style.zIndex = zix;
            }
        }
        var autonum = 0;
        var time2 = null;
//图片自动滚动
        function automove() {
            autonum++;
            if (autonum == ad_imgs.length) {
                autonum = 0;
            }
            if (autonum == -1) {
                autonum = ad_imgs.length - 1;
            }
            moveto(autonum);
            ad_numc();
        }
        time2 = setInterval(automove, 2500);
        var ad_num = document.getElementById('ad_num');
        var ad_l = document.getElementById('ad_l');
        var ad_r = document.getElementById('ad_r');
        var ad_nums = ad_num.getElementsByTagName('li');
//    ad_nums[i].onmouseover事件
        for (var i = 0; i < ad_nums.length; i++) {
            ad_nums[i].onmouseover = function () {
                clearInterval(time2);
                for (var j = 0; j < ad_nums.length; j++) {
                    if (this == ad_nums[j]) {
                        autonum = j;
                        moveto(j);
                        ad_numc();
                        clearInterval(time2);
                    }
                }
            };
        }
//    ad_outer.onmouseover和onmouseout事件
        ad_outer.onmouseover = function () {
            ad_l.style.display = "block";
            ad_r.style.display = "block";
            clearInterval(time2);
            ad_numc();
        };
        ad_outer.onmouseout = function () {
            //如果不加if语句，一直执行onmouseout事件
            if (time2) {
                clearInterval(time2);
            }
            ad_l.style.display = "";
            ad_r.style.display = "";
            time2 = setInterval(automove, 2500);
            ad_numc();
        };
//数字背景色改变
        function ad_numc() {
            for (var j = 0; j < ad_nums.length; j++) {
                ad_nums[j].style.backgroundColor = "";
            }
            ad_nums[autonum].style.backgroundColor = "#B61B1F";
        }
//左右点击换图片
        ad_l.onclick = function () {
            clearInterval(time2);
            autonum -= 2;
            automove();
            time2 = setInterval(automove, 2500);
        };
        ad_r.onclick = function () {
            clearInterval(time2);
            automove();
            time2 = setInterval(automove, 2500);
        };
    }
//充值电影票机票游戏
    fores();
    function fores() {
        var fore_b = document.getElementById("fore_b");
        var fore_bs = fore_b.getElementsByTagName("div");
        var fore_bli = fore_b.getElementsByTagName("li");
        for (var k = 0; k < fore_bli.length; k++) {
            fore_bli[k].onmouseover = function () {
                for (var i = 0; i < fore_bli.length; i++) {
                    if (this == fore_bli[i]) {
                        this.className = "showli";
                        fore_bs[i].style.display = "block";
                    }
                    else {
                        fore_bli[i].className = "";
                        fore_bs[i].style.display = "none";
                    }
                }
            }
        }
        //机票订购
        var fore_btop = document.getElementById("fore_btop");
        var fore_btopli = fore_btop.getElementsByTagName("li");
        var fore_out1 = document.getElementById("fore_out1");
        var timef = null;
        function moverto1(startPos, endPos) {
            var startPos = startPos;
            var endPos = endPos;
            var step = 0;
            var stepMax = 20;
            var everystep = (endPos - startPos) / stepMax;
            timef = setInterval(move, 10);
            function move() {
                step++;
                fore_out1.scrollLeft += everystep;
                if (step >= stepMax) {
                    fore_out1.scrollLeft = endPos;
                    clearInterval(timef);
                }
            }
        }
        for (var j = 0; j < fore_btopli.length; j++) {
            fore_btopli[j].onmouseenter = function () {
                if (timef) {
                    clearInterval(timef)
                }
                for (var i = 0; i < fore_btopli.length; i++) {
                    if (this == fore_btopli[i]) {
                        this.className = "showli";
                        moverto1(fore_out1.scrollLeft, 236 * i);
                    }
                    else {
                        fore_btopli[i].className = "";
                    }
                }
            }
        }
        //电影票
        var fore_d = document.getElementById("fore_d");
        var fore_dul = fore_d.getElementsByTagName("ul")
        var fore_dtop = document.getElementById("fore_dtop");
        var fore_dtops = fore_dtop.getElementsByTagName("li")
        for (var l = 0; l < fore_dtops.length; l++) {
            fore_dtops[l].onmouseenter = function () {
                for (var i = 0; i < fore_dtops.length; i++) {
                    if (this == fore_dtops[i]) {
                        fore_dtops[i].className = "showli";
                        fore_dul[i].style.display = "block";
                    } else {
                        fore_dtops[i].className = "";
                        fore_dul[i].style.display = "none";
                    }
                }
            }
        }
        //游戏
        var fore_etop = document.getElementById("fore_etop");
        var fore_etopli = fore_etop.getElementsByTagName("li");
        var fore_out2 = document.getElementById("fore_out2");
        function moverto(startPos, endPos) {
            var startPos = startPos;
            var endPos = endPos;
            var step = 0;
            var stepMax = 20;
            var everystep = (endPos - startPos) / stepMax;
            timef = setInterval(move, 10);
            function move() {
                step++;
                fore_out2.scrollLeft += everystep;
                if (step >= stepMax) {
                    fore_out2.scrollLeft = endPos;
                    clearInterval(timef);
                }

            }
        }
        for (var y = 0; y < fore_etopli.length; y++) {
            fore_etopli[y].onmouseover = function () {
                if (timef) {
                    clearInterval(timef)
                }
                for (var i = 0; i < fore_etopli.length; i++) {
                    if (this == fore_etopli[i]) {
                        this.className = "showli";
                        moverto(fore_out2.scrollLeft, 236 * i);
                    }
                    else {
                        fore_etopli[i].className = "";
                    }
                }
            }
        }
        function getClassNames(classStr, tagName) {
            if (document.getElementsByClassName) {
                return document.getElementsByClassName(classStr)
            } else {
                var nodes = document.getElementsByTagName(tagName), ret = [];
                for (i = 0; i < nodes.length; i++) {
                    if (hasClass(nodes[i], classStr)) {
                        ret.push(nodes[i])
                    }
                }
                return ret;
            }
        }
        function hasClass(tagStr, classStr) {
            var arr = tagStr.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == classStr) {
                    return true;
                }
            }
            return false;
        }
        var fore_c = getClassNames("fore_c", "div");
        var main = document.getElementById("main");
        showMain();
        function showMain(){
            var time=null;
            var a=true;
            var fore=document.getElementById('fore');
            var li=fore.getElementsByTagName('li');
            for(var i=0;i<4;i++){
                li[i].onmouseenter = function () {
                    for (var j = 0; j < 4; j++) {
                        if (this == li[j]) {
                            fore_c[j].style.display = "block";
                        } else {
                            fore_c[j].style.display = "none";
                        }
                        if (a) {
                            a = false;
                            var mainTop = 212;
                            var liTop = 0;
                            time = setInterval(function () {
                                mainTop -= 5;
                                main.style.top = mainTop + 'px';
                                if (mainTop <= 72) {
                                    liTop -= 5;
                                    for (var j = 0; j < 4; j++) {
                                        li[j].style.top = liTop + 'px';
                                        if (liTop <= -40) {
                                            clearInterval(time);
                                            li[j].style.top = '-40px';
                                            main.style.top = '26px';
                                        }
                                    }
                                }
                            }, 10)
                        }
                    }
                }
            }
            var close=document.getElementById('close');
            close.onclick=function(){
                var mainTop = 32;
                var liTop = -40;
                time=setInterval(function () {
                    if(liTop<0){
                        liTop+=5;
                        for(var j=0;j<4;j++){
                            li[j].style.top = liTop + 'px';
                        }
                    }
                    mainTop+=5;
                    main.style.top = mainTop + 'px';
                    if(mainTop>=212){
                        clearInterval(time);
                        main.style.top = '212px';
                        setTimeout(function(){a=true;},1000);
                    }
                },10)
            };
        }
    }
//点击切换div
    divonclik();
    function divonclik(){
        var menu_brb = document.getElementById('menu_brb');
        var menu_br = document.getElementById('menu_br');
        var menu_brs = menu_br.getElementsByTagName('div');
        var br_l = document.getElementById('br_l');
        var br_r = document.getElementById('br_r');
        var img = menu_br.getElementsByTagName('img');
        menu_brb.scrollLeft = 1000;
        var imgWW = menu_brs[0].offsetWidth;
        menu_brb.onmouseover = function () {
            br_l.style.display = "block";
            br_r.style.display = "block";
        };
        menu_brb.onmouseout = function () {
            br_l.style.display = "";
            br_r.style.display = "";
        };
        br_l.onmouseover = function () {
            br_l.style.display = "block";
            br_r.style.display = "block";
        };
        br_r.onmouseover = function () {
            br_l.style.display = "block";
            br_r.style.display = "block";
        };
//左右点击切换
        var timea = null;
        var max = 0;
//左点击切换
        br_l.onclick = function () {
            //每次点击清理计时器
            if (timea) {
                clearInterval(timea)
            }
            //滚动事件；凡是需要滚动的都需要计时器
            timea = setInterval(function () {
                menu_brb.scrollLeft += 10;
                max += 10;
                if (max == 1000) {
                    max = 0;
                    clearInterval(timea);
                }
                //到5000的1时立马显示的是1000位置的1
                if (menu_brb.scrollLeft >= 5000) {
                    menu_brb.scrollLeft = 1000;
                }
            }, 1)
        };
//右点击点击切换
        br_r.onclick = function () {
            if (timea) {
                clearInterval(timea)
            }
            timea = setInterval(function () {
                menu_brb.scrollLeft -= 10;
                max += 10;
                if (max == 1000) {
                    max = 0;
                    clearInterval(timea);
                }
                if (menu_brb.scrollLeft <= 0) {
                    menu_brb.scrollLeft = 4000;
                }
            }, 1)
        };

    }
//猜你喜欢
    guessYou();
    function guessYou(){
        var guess_tab = document.getElementById('guess_tab');
        var guess_tabi = guess_tab.getElementsByTagName('i');
        var guess_tabs = guess_tab.getElementsByTagName('span');
        var guess_cu = document.getElementById('guess_cu');
        var guess_lis = guess_cu.getElementsByTagName('li');
        var guess_imgs = guess_cu.getElementsByTagName('img');
        var guess_s = guess_cu.getElementsByTagName('s');
        var guess_sp = guess_cu.getElementsByTagName('span');
//alert(guess_sp.length);
        var y=0;
//换一换地方的onmouse事件
        guess_tab.onmouseover=function(){
            guess_tabs[0].style.color="#C81623";
            guess_tabi[0].className="guessi imgc homebg_03";
        };
        guess_tab.onmouseout=function(){
            guess_tabs[0].style.color="";
            guess_tabi[0].className="guessi imgc homebg_04";
        };
//json数据传入切换
        guess_tab.onclick=function(){
            if(window.XMLHttpRequest){
                var xml = new XMLHttpRequest();
            }
            else {
                var xml = new ActiveXObject();
            }
            xml.open("get","style/jd.json?"+Math.random(),true);
            xml.send(null);
            xml.onreadystatechange=function(){
                if(xml.readyState==4){
                    if(xml.status==200){
                        var x =JSON.parse(xml.responseText) ;
                        for(var i=0;i<5;i++){
                            guess_imgs[i].src= x.pic[i+y];
                            guess_s[i].innerHTML= x.name[i+y];
                            guess_sp[i].innerHTML= x.price[i+y];
                        }
                    }
                    else {
                    }
                }
            };
            y+=5;
            if(y>15){
                y=0;
            }
        };
    }
//每层楼导航栏处change
    changeTab();
    function changeTab(){
        for(var i=1;i<12;i++){
                tab(i);
        }
        function tab(num) {
            var one_classfy = document.getElementById('classfy' + num);
            var one_ctr = document.getElementById('ctr' + num);
            var one_ctrs = one_ctr.getElementsByTagName('ul');
            var one_classfys = one_classfy.getElementsByTagName('li');
            var one_classfyi = one_classfy.getElementsByTagName('i');
            var one_classfypp = one_classfy.getElementsByTagName('p');
            for (var j = 0; j < one_classfys.length; j++) {
                one_classfys[j].onmouseover = function () {
                    for (var i = 0; i < one_classfys.length; i++) {
                        if (this == one_classfys[i]) {
                            if (i > 0) {
                                var x = i - 1;
                                one_classfyi[x].style.borderRight = "1px solid #ffffff";
                            }
                            one_classfyi[i].style.borderRight = "1px solid #ffffff";
                            one_classfyi[i].style.color = "#C81623";
                            one_classfys[i].className = "one_lia";
                            one_ctrs[i].style.display = "block";
                            one_classfypp[i].style.display = "block";
                        }
                        else {
                            one_classfyi[i].style.borderRight = "";
                            one_classfyi[one_classfys.length - 1].style.borderRight = "1px solid #ffffff";
                            one_classfyi[i].style.color = "";
                            one_classfys[i].className = "one_li";
                            one_ctrs[i].style.display = "";
                            one_classfypp[i].style.display = "";
                        }
                    }
                }
            }
        }
    }
//小球颜色切换
    function ball(aa,nums){
        for(var i=0;i<nums.length;i++){
            nums[i].style.backgroundColor="";
        }
        if(nums[aa]){
            nums[aa].style.backgroundColor="#c81623";
        }
    }
   //楼层切换
    for(var k=1;k<14;k++){
        bigPic(k);
    }
//每层楼大图滚动
    function bigPic(num){
        var timee=null;
        var timeone = null;
        var out=document.getElementById("out"+num);
        var one_num=out.getElementsByTagName("div")[1];
        var one_nums=one_num.getElementsByTagName('p');
        var oneW=out.offsetWidth;
        var ll=out.getElementsByTagName("i")[0];
        var rl=out.getElementsByTagName("i")[1];
        out.scrollLeft=oneW;
        out.onmouseenter = function () {
            ll.style.display = "block";
            rl.style.display = "block";
            clearInterval(timee);
        };
        out.onmouseleave = function () {
            ll.style.display = "";
            rl.style.display = "";
            timee = setInterval(one, 4000);
        };
        var maxo = 0;
        var sb = 0;
        ball(sb,one_nums);
        function one() {
            //每次点击清理计时器
            sb++;
            if (timeone) {
                clearInterval(timeone)
            }
            timeone = setInterval(function () {
                out.scrollLeft += 20;
                maxo += 20;
                if (maxo >= oneW) {
                    maxo = 0;
                    clearInterval(timeone);
                    if (out.scrollLeft >= oneW * 5) {
                        out.scrollLeft = oneW;
                        sb = 0;
                    }
                    ball(sb, one_nums);
                    zjy = true;
                }
            }, 10)
        }
        function onea() {
            sb--;
            //每次点击清理计时器
            if (timeone) {
                clearInterval(timeone)
            }
            //滚动事件；凡是需要滚动的都需要计时器
            timeone = setInterval(function () {
                out.scrollLeft -= 5;
                maxo += 5;
                if (maxo >= oneW) {
                    maxo = 0;
                    //max为1000时，正好scrollLeft为1000，停止
                    clearInterval(timeone);
                    if (out.scrollLeft <= 0) {
                        out.scrollLeft = oneW * 4;
                        sb = 3;
                    }
                    ball(sb,one_nums);
                    zjy = true;
                }
                //到0的4时立马显示的是4000位置的4
            }, 1)
        }
        timee = setInterval(one, 4000);
        var zjy = true;
        ll.onclick = function () {
            if (zjy) {
                zjy = false;
                clearInterval(timee);
                onea();
            }
        };
        rl.onclick = function () {
            if (zjy) {
                zjy = false;
                clearInterval(timee);
                one();
            }
        };
        for(var i=0;i<one_nums.length;i++){
            one_nums[i].onmouseover=function(){
                for(var j=0;j<one_nums.length;j++){
                    if(this==one_nums[j]){
                        sb=j;
                        this.style.backgroundColor="#c81623";
                        moveTo(j+1);
                    }else{
                        one_nums[j].style.backgroundColor="";
                    }
                }
            }
        }
        function moveTo(endNum){
            var step=0;
            var stepMax=10;
            var time;
            var everyStep=(endNum*out.offsetWidth-out.scrollLeft)/stepMax;
            function move(){
                out.scrollLeft+=everyStep;
                step++;
                if(step >= stepMax){
                    clearInterval(time);
                    out.scrollLeft =endNum*out.offsetWidth;
                }
            }
            time=setInterval(move,25);
        }
    }
    //天天特价
    for(var z = 1;z<8;z++){
        n(z);
    }
    function n(nn){
        var out =document.getElementById('outa'+nn);
        var innera =document.getElementById('innera'+nn);
        var time = null;
        var time2 = null;
        out.onmouseenter=function(){
            time =setInterval(function(){
                innera.scrollLeft++;
                if(innera.scrollLeft==10){
                    clearInterval(time);
                }
            },10)
        };
        out.onmouseleave = function(){
            if(time){clearInterval(time)}
            time2 =setInterval(function(){
                innera.scrollLeft--;
                if(innera.scrollLeft==0){
                    clearInterval(time2);
                }
            },10)}
    }
//特价右侧滑动
    var timea = null;
    var timec = null;
    var out_gs = document.getElementById("out_gs");
    out_gs.scrollTop=0;
    function clear(){
        clearInterval(timea);
        clearInterval(timec);
    }
    function roll(){
        if(out_gs.scrollTop%120==0){
            clear();
            timec=setTimeout(function(){
                timea=setInterval(autoscroll,10)
            },2000)
        }
    }
    function autoscroll(){
        out_gs.scrollTop++;
        roll();
        if(out_gs.scrollTop==120*6){
            out_gs.scrollTop=0;
        }
    }
    timea=setInterval(autoscroll,1);
//左侧导航栏
//classname的ie兼容处理
    leftroll();
    function leftroll() {
        var allnav = document.getElementById('allnav');
        var alls = allnav.getElementsByTagName('li');
        var alli = allnav.getElementsByTagName('i');
        var t = 0;
        for (var i = 0; i < alls.length; i++) {
            alls[i].onmouseover = function () {
                for (var j = 0; j < alls.length; j++) {
                    if (this == alls[j]) {
                        alls[j].className = "show";
                        alli[j].className = "now";
                    }
                    else {
                        alls[j].className = "";
                        alli[j].className = "";
                    }
                    if (j == t) {
                        alls[t].className = "show2";
                        alli[t].className = "now";

                    }
                }
            }
        }
        allnav.onmouseout = function () {
            for (var j = 0; j < alls.length; j++) {
                if (alls[j].className !== "show2") {
                    alls[j].className = "";
                    alli[j].className = "";
                } else {
                    alls[t].className = "show2";
                    alli[t].className = "now";
                }
            }
        };
        var time11 = null;
        var floor = getClassNames("floor", "div");
        var kl = 0;
        //对应楼层滚动
        window.onscroll = function () {
            var stt = document.documentElement.scrollTop || document.body.scrollTop;
            if ((stt > floor[0].offsetTop - 300) && (stt <= floor[11].offsetTop + 500)) {
                allnav.style.display = "block";
                for (var i = 0; i < floor.length; i++) {
                    if (stt > floor[i].offsetTop - 300) {
                        t = i;
                    }
                    alls[i].className = "";
                    alli[i].className = "";
                }
                alls[t].className = "show2";
                alli[t].className = "now";
                for (var l = 0; l < alls.length; l++) {
                    alls[l].onclick = function () {
                        for (var j = 0; j < alls.length; j++) {
                            if (this == alls[j]) {
                                kl = j;
                                time11 = setInterval(function () {
                                    if (stt < floor[kl].offsetTop) {
                                        stt += 100;
                                        document.documentElement.scrollTop = stt;
                                        document.body.scrollTop = stt;
                                        if (stt >= floor[kl].offsetTop) {
                                            clearInterval(time11);
                                            document.documentElement.scrollTop =floor[kl].offsetTop ;
                                            document.body.scrollTop = floor[kl].offsetTop;
                                        }
                                    } else {
                                        stt -= 100;
                                        document.documentElement.scrollTop = stt;
                                        document.body.scrollTop = stt;
                                        if (stt <= floor[kl].offsetTop) {
                                            clearInterval(time11);
                                            document.documentElement.scrollTop =floor[kl].offsetTop ;
                                            document.body.scrollTop = floor[kl].offsetTop;
                                        }
                                    }
                                }, 1);
                            }
                        }
                    }
                }
            }
            else {
                allnav.style.display = "";
            }
        };
    }
//右侧信息栏
    ra();
    function ra(){
        var ra = document.getElementById("ra");
        var rali = ra.getElementsByTagName("li");
        var rap = ra.getElementsByTagName("p");
        for(var i=0;i<rali.length;i++){
            rali[i].onmouseenter = function(){
                var me = this;
                if(me.time){
                    clearInterval(me.time);
                }
                for(var j = 0;j<rali.length;j++){
                    if(this ==rali[j]){
                        var k=j;
                        var t=-90;
                        me.time = setInterval(function(){
                            t+=5;
                            if(t>=31){
                                clearInterval(me.time);
                                t=31;
                            }
                            rap[k].style.right=t+"px";
                            rap[k].style.backgroundColor="#C81623";
                            rali[k].style.backgroundColor="#C81623";
                        },20)
                    }
                }
            };
            rali[i].onmouseleave =function(){
                var me = this;
                if(me.time){clearInterval(me.time)}
                for(var j =0;j<rali.length;j++){
                    if(this ==rali[j]){
                        var k = j;
                        var t = 31;
                        me.time=setInterval(function(){
                            t-=5;
                            if(t<=-90){
                                t=-90;
                                clearInterval(me.time)
                            }
                            rap[k].style.right=t+"px";
                            rap[k].style.backgroundColor="#7A6E6E";
                            rali[k].style.backgroundColor="#7A6E6E";
                        },20)
                    }
                }
            }
        }

    }
//顶部点击
    var gotop = document.getElementById("gotop");
    gotop.onclick = function(){
        document.documentElement.scrollTop=0;
        document.body.scrollTop=0;
    }
}
