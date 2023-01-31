import { CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllGists } from "../store/gists/actions"

export const Gists = () => {
    const dispatch = useDispatch();
    const { gists, request, error } = useSelector(state => state.gists);

    const requestGists = () => {
        dispatch(getAllGists());
    };
    
    useEffect (() => {
        requestGists();
    }, [])
    
    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []);
    
    if (request) {
        return <CircularProgress />
    }

    return <div>
        {error && (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )}
        <ul data-testid="gistlist">{gists.map(renderGist)}</ul>
    </div>
};
