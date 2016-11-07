$(document).ready(function() {
    $(':checkbox').change(function(event) {
        clubsOn[event.target.id] = !clubsOn[event.target.id];
        var name = event.target.id;
        if (name == "barcelona") {
            alert("yes")
            clubsOn[name] = true;
        }
        alert(event.target.id);
    });
});