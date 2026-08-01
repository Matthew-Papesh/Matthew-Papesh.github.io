import GitHubRepoReadMeViewer from "../components/GitHubMDViewer";

interface Props {
    owner: string;
    repo: string;
    file: string; // Expected: "branch/path/to/readme.md"
}

/**
 * @brief Formats a viewable project page
 */
function ProjectPage({owner, repo, file} : Props) {
    return <>
        <GitHubRepoReadMeViewer owner={owner} repo={repo} file={file} />
    </>
}

export default ProjectPage