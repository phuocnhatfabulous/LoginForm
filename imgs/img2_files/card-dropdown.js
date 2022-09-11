( function() {

    document.addEventListener('click', function(event) {
        if (event.target.id) {
            var id = event.target.id;
            if (id.includes('chevron')) {
                id = id.substring(id.lastIndexOf("-") +1 );
            }
            var dropdowns = document.getElementById("tag-content-" + id);
            var socialfooter = document.getElementById("social-foot-" + id);
            if (event.target.matches('.card-tags-btn') || event.target.matches('#chevron-icon-' + id)) {
                document.getElementById("tag-content-" + id).classList.toggle("show");
                document.getElementById("social-foot-" + id).classList.toggle("card-flatten-bottom-social-footer");
                document.getElementById("chevron-icon-" + id).classList.toggle("rotate");

                var dropdownContentList = document.getElementsByClassName('card-tags-dropdown-content');
                for (var i = 0; i < dropdownContentList.length; i++ ) {
                    var uid = dropdownContentList[i].id;
                    uid = uid.substring(uid.lastIndexOf("-") +1 );
                    if (dropdownContentList[i].classList.contains("show") && id != uid) {
                        dropdownContentList[i].classList.toggle("show");
                        document.getElementById("chevron-icon-" + uid).classList.toggle("rotate");
                        document.getElementById("social-foot-" + uid).classList.toggle("card-flatten-bottom-social-footer");
                    }
                }
            }
            else {
                if (dropdowns.classList.contains('show')) {
                    dropdowns.classList.remove('show');
                    socialfooter.classList.toggle("card-flatten-bottom-social-footer");
                    document.getElementById("chevron-icon-" + id).classList.toggle("rotate");
                }
            }
        }
        else {
            var dropdownContentList2 = document.getElementsByClassName('card-tags-dropdown-content');
            for (var j = 0; j < dropdownContentList2.length; j++ ) {
                if (dropdownContentList2[j].classList.contains("show")) {
                    var uid2 = dropdownContentList2[j].id;
                    uid2 = uid2.substring(uid2.lastIndexOf("-") +1 );
                    dropdownContentList2[j].classList.toggle("show");
                    document.getElementById("chevron-icon-" + uid2).classList.toggle("rotate");
                    document.getElementById("social-foot-" + uid2).classList.toggle("card-flatten-bottom-social-footer");
                }
            }
        }
    });
} )();
