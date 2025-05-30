const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

let songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  "Drowning": { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  "Whiplash": { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  "HOT": { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};

const playlist = document.querySelector(".playlist");
const songInfo = document.querySelector(".songInfo");
const sortBtn = document.querySelector(".sort");
let isSorted = false;
const addForm = document.querySelector(".addForm");

function drawSongList()
{
  const ol1 = document.createElement("ol");
  ol1.classList.add("list-group", "list-group-numbered");
  songList.forEach(song => {
    const li = document.createElement("li");
    li.innerText = `${song}`;
    li.classList.add("list-group-item");
    ol1.appendChild(li);
  })
  playlist.appendChild(ol1);
}

function drawSongDetails(songDetails)
{
  songInfo.innerHTML = "";

  const ol2 = document.createElement("ol");
  ol2.classList.add("list-group", "list-group-numbered");
  
  for(const song in songDetails)
  {
    const details = songDetails[song];

    if(details.likes < 60000) {
      continue;
    }

    const li = document.createElement("li");
    const title = document.createElement("span");
    const artist = document.createElement("span");
    const likes = document.createElement("span");
    
    title.innerHTML = `${song} - `;
    artist.innerHTML = `${details.artist} `;
    likes.innerHTML = `❤️ ${details.likes}`;

    li.classList.add("list-group-item");

    li.append(title, artist, likes);
    ol2.appendChild(li);
  }
  songInfo.appendChild(ol2);
}

function handleSort()
{
  isSorted = !isSorted
  const entries = Object.entries(songDetails);
  const sortedEntries = isSorted ? entries.filter(([title, detail]) => detail.likes >= 60000).sort((a, b) => b[1].likes - a[1].likes) : entries;
  const sortedDetails = Object.fromEntries(sortedEntries);
  drawSongDetails(sortedDetails);
}

function handleAddSong(e)
{
  e.preventDefault();

  const title = document.querySelector("#addTitle").value.trim();
  const artist = document.querySelector("#addArtist").value.trim();
  const likes = Number(document.querySelector("#addLikes").value);

  if (!title || !artist || isNaN(likes)) {
    alert("모든 항목을 입력해주세요!");
    return;
  }

  songDetails[title] = {
    artist: artist,
    likes: likes,
  };

  drawSongDetails(songDetails);
  addForm.reset();
  
  const modal = bootstrap.Modal.getInstance(document.getElementById("addSongModal"));
  modal.hide();
}

document.addEventListener("DOMContentLoaded", () => {
  drawSongList();
  drawSongDetails(songDetails);
})

sortBtn.addEventListener("click", () => {
  handleSort(songDetails);
});

addForm.addEventListener("submit", handleAddSong);


