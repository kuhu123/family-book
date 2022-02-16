var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/Wbx5bYx3/sister-clipart-14107.png", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/Bvj7C8kh/grandma-images.png"];
var names = ["Fmaily Book", "Suri thata", "Santosh", "Kushu", "Kuhu", "Ashu", "Nirmala avva"];
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 6
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }


    var updatedImage = images[i];

    var updatedName = names[i];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}