type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// };

// intersection '&'
type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
};

// // enum operator
// enum Level {
//     junior = "junior",
//     mid = "mid",
//     senior = "senior",
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leaderShipExperience: number;
    level: "junior" | "mid" | "senior";
}


// union '|'
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Nasar Ahmad",
    expertise: "JavaScript",
    experience: 1
}

const nextLevel: NextLevelDeveloper = {
    name: "Rayhan Howlader",
    expertise: "TypeScript",
    experience: 2,
    level: "mid",
    // level: Level.mid,
    leaderShipExperience: 1

}