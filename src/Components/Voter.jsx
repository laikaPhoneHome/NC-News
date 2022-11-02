import { useEffect, useState } from 'react';
import * as API from '../Api';

export const Voter  = ({votes, target, setVotes}) => {
    const [vote, setVote] = useState(0);
    const [thumb, setThumb] = useState('none');
    const [renderCount, setRenderCount] = useState(-1)

    const handleChange = (input) => {

        // vote > 0 || vote < 0 ?
        // setVote((Vote) => Vote *= -1)
        // : setVote(event.target.value)


        // if(vote === input){
        //     setVote((current) => current *= -1)
        //     console.log(vote, 'unvote')
        // }else if(vote !== 0 && vote !== input){
        //     setVote((current) => current *= -1)
        //     console.log(vote, 'vote opposite')
        // } else if(vote === 0) {
        //     setVote(input)
        //     console.log(vote, 'vote from none')
        // }
        // setVotes((current) => current + vote)

        // vote === 0 ? 
        // setVote(() => input)
        // : setVote((vote) => -input);

        // if(input === -1){
        //     console.log(input, 'input in if')
        //     console.log(votes, 'votes in if')
        //     if(vote === 0){
        //         console.log('add downvote v')
        //         setVote(-1)
        //         setVotes((current) => current -1)
        //     }
        //     else if(vote === -1){
        //         console.log('remove downvote ^')
        //         setVote(1)
        //         setVotes((current) => current + 1)
        //     }
        //     else if(vote === 1){ 
        //         console.log('remove downvote and upvote ^^')
        //         setVote(-2)
        //         setVotes((current) => current - 2)
        //     }
        // }
        // if(input === 1){
        //     console.log(input, 'input in if')
        //     if(vote === 0){
        //         console.log('add upvote ^')
        //         console.log(votes)
        //         setVote(1)
        //         setVotes((current) => current + vote)
        //     }
        //     else if(vote === 1){
        //         console.log('takeaway upvote v')
        //         console.log(votes)
        //         setVote(-1)
        //         setVotes((current) => current - vote)
        //     }
        //     else if(vote === -1){
        //         console.log('takeaway upvote and downvote vv')
        //         console.log(votes)
        //         setVote(2)
        //         setVotes((current) => current + 2)
        //     }
        // }

        console.log('*******',renderCount, '*******')
        if(thumb === 'none'){
            if(input === 1){
                setThumb('up');
                setVote(() => 1);
            }
            if(input === -1){
                setThumb('down');
                setVote(() => -1);
            }
        }
        if(thumb === 'up'){
            if(input === 1){
                setThumb('none');
                setVote(() => -1);
            }
            if(input === -1){
                setThumb('down');
                setVote(() => -2);
            }
        }
        if(thumb === 'down'){
            if(input === 1){
                setThumb('up');
                setVote(() => 2);
            }
            if(input === -1){
                setThumb('none');
                setVote(() => 1);
            }
        }
    
    }
        useEffect(() => {
            setVotes((curr) => curr + vote);
            console.log(votes, 'current vote')
            console.log(thumb)
            console.log('api request')
            console.log("VOTE IS SET TO ", vote)
            setRenderCount((curr) => curr + 1)
            target.article_id ?
            API.patchVotes(vote,`articles/${target.article_id}`)
            .then((data) => {
            })
            .catch(() => {
                setVote((Vote) => Vote *= -1)
                setVotes((curr) => curr - vote)
            })
            : API.patchVotes(vote,`comments/${target.comment_id}`)
            .then((data) => {

            })
            .catch(() => {
                setVote((current) => current *= -1)
                setVotes((curr) => curr - vote)
            })
            }, [vote, thumb])
        

    return (
    <div className="voter">
        <button value={1} className='thumb-button' aria-label='Thumbs up' onClick={() => handleChange(1)}>
            <svg value={1} className="vote-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.13 89.76">
                <path value={1} d="M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"></path>
            </svg>
        </button>
        <button value={-1} className='thumb-button' aria-label='Thumbs down' onClick={() => handleChange(-1)}>
            <svg value={-1} className="vote-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.13 89.76">
                <path value={-1} d="M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"></path>
            </svg>
        </button>
    </div>
    )

}