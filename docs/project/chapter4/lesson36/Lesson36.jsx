import { useState } from 'react';
import { useImmer } from 'use-immer';

const ItemList = ({ artworks, onToggle }) => {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}

const Lesson36 = () => {
    const initialList = [
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false },
        { id: 2, title: 'Terracotta Army', seen: true },
    ];

    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(
        initialList
    );

    function handleToggleMyList(artworkId, nextSeen) {
        const myNextList = [...myList];
        const artwork = myNextList.find(
            a => a.id === artworkId
        );
        artwork.seen = nextSeen;
        setMyList(myNextList);
    }

    function handleToggleYourList(artworkId, nextSeen) {
        const yourNextList = [...yourList];
        const artwork = yourNextList.find(
            a => a.id === artworkId
        );
        artwork.seen = nextSeen;
        setYourList(yourNextList);
    }

    return (
        <>
            <div>Lesson 36: Arrays with Objects</div>
            <h3>Art Bucket List</h3>
            <h3>My list of art to see:</h3>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList} />
            <h3>Your list of art to see:</h3>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList} />
        </>
    );
}

// const Lesson36 = () => {
//     const initialList = [
//         { id: 0, title: 'Big Bellies', seen: false },
//         { id: 1, title: 'Lunar Landscape', seen: false },
//         { id: 2, title: 'Terracotta Army', seen: true },
//     ];

//     const [myList, setMyList] = useImmer(initialList);
//     const [yourList, setYourList] = useImmer(
//         initialList
//     );

//     function handleToggleMyList(artworkId, nextSeen) {
//         setMyList(draft => {
//             const artwork = draft.find(
//                 a => a.id === artworkId
//             );
//             artwork.seen = nextSeen;
//         })
//     }

//     function handleToggleYourList(artworkId, nextSeen) {
//         setYourList(draft => {
//             const artwork = draft.find(
//                 a => a.id === artworkId
//             );
//             artwork.seen = nextSeen;
//         })
//     }

//     return (
//         <>
//             <h1>Art Bucket List</h1>
//             <h3>My list of art to see:</h3>
//             <ItemList
//                 artworks={myList}
//                 onToggle={handleToggleMyList} />
//             <h3>Your list of art to see:</h3>
//             <ItemList
//                 artworks={yourList}
//                 onToggle={handleToggleYourList} />
//         </>
//     );
// }


export default Lesson36;