import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
      } = repo
    return (
        <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
                <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">
                    <a href={html_url}>
                    <FaLink style={{display:'inline'}} className="mb-2 mr-2" /> {name}
                    </a>
                    </h3>
                <p className='mb-3'> {description} </p>
                    <div>
                    <div className="badge badge-info mr-2 badge-lg">
                        <FaEye className='mr-2'/> {watchers_count}
                    </div>
                    <div className="badge badge-success badge-lg mr-2">
                        <FaStar className='mr-2'/> {stargazers_count}
                    </div>
                    <div className="badge badge-error badge-lg mr-2">
                        <FaInfo className='mr-2'/> {open_issues}
                    </div>
                    <div className="badge badge-warning badge-lg mr-2">
                        <FaUtensils className='mr-2'/> {forks}
                    </div>
                    </div>
                </div>
        </div>
    );
}

export default RepoItem;