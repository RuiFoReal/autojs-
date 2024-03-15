function printSongList() {
    console.log("Printing song list:");

    const songList = Array.from(document.querySelectorAll(".songlist__item"))
        .map(
            (v) => "{" +
                "\"mod_songname__name\":\"" + v.querySelector(".mod_songname__name").title + "\"" + ",\n" +
                "\"singer_name\":\"" + v.querySelector(".singer_name").title + "\"" + "\n"
                + "},"
        )
        .reduce((s1, s2) => s1 + "\n" + s2);
    console.log(songList);
}