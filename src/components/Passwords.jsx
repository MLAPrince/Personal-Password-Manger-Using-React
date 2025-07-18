import React from 'react'
import { useNavigate } from 'react-router-dom';

const Passwords = () => {
  const [copied, setCopied] = React.useState({});

  // Copying to clipboard 
  const handleCopy = (rowIdx, field, value) => {
    if (!value) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopied(prev => ({ ...prev, [`${rowIdx}-${field}`]: true }));
      setTimeout(() => {
        setCopied(prev => ({ ...prev, [`${rowIdx}-${field}`]: false }));
      }, 500);
    });
  };

  const [credentials, setCredentials] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const creds = JSON.parse(localStorage.getItem("credentials")) || [];
    setCredentials(creds);
  }, []);

  // Deleting credential
  const handleDelete = (index) => {
    const updated = credentials.filter((_, i) => i !== index);
    setCredentials(updated);
    localStorage.setItem("credentials", JSON.stringify(updated));
  };

  // Editing credential and saving index to localStorage and redirecting to home
  const handleEdit = (index) => {
    localStorage.setItem("editCredentialIndex", index);
    navigate("/");
  };

  return (
    <div className='text-white'>
      <h1 className='text-4xl text-center mt-5 text-lime-500'>
        Saved Passwords
      </h1>
      <div className="w-[90vw] mt-5 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-lime-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">Website</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Username</th>
              <th scope="col" className="px-6 py-3">Password</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {credentials.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-400">No credentials saved.</td>
              </tr>
            ) : (
              credentials.map((cred, idx) => (
                <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span className="inline-flex items-center gap-2">
                      {cred.website ? (
                        <>
                          <a href={cred.website.startsWith('http') ? cred.website : `https://${cred.website}`} target='_blank' rel="noopener noreferrer">
                            {cred.website}
                          </a>
                          <button
                            title="Copy"
                            onClick={() => handleCopy(idx, 'website', cred.website)}
                            disabled={copied[`${idx}-website`]}
                            className={`ml-1 text-gray-400 hover:text-lime-500 transition-opacity duration-200 ${copied[`${idx}-website`] ? 'opacity-40 cursor-not-allowed' : ''}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="2" y="2" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
                          </button>
                        </>
                      ) : <span>-</span>}
                    </span>
                  </th>
                  <td className="pl-6 py-4">
                    <span className="inline-flex items-center gap-2">
                      {cred.email || '-'}
                      {cred.email && (
                        <button
                          title="Copy"
                          onClick={() => handleCopy(idx, 'email', cred.email)}
                          disabled={copied[`${idx}-email`]}
                          className={`ml-1 text-gray-400 hover:text-lime-500 transition-opacity duration-200 ${copied[`${idx}-email`] ? 'opacity-40 cursor-not-allowed' : ''}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="2" y="2" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
                        </button>
                      )}
                    </span>
                  </td>
                  <td className="pl-6 py-4">
                    <span className="inline-flex items-center gap-2">
                      {cred.username || '-'}
                      {cred.username && (
                        <button
                          title="Copy"
                          onClick={() => handleCopy(idx, 'username', cred.username)}
                          disabled={copied[`${idx}-username`]}
                          className={`ml-1 text-gray-400 hover:text-lime-500 transition-opacity duration-200 ${copied[`${idx}-username`] ? 'opacity-40 cursor-not-allowed' : ''}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="2" y="2" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
                        </button>
                      )}
                    </span>
                  </td>
                  <td className="pl-6 py-4">
                    <span className="inline-flex items-center gap-2">
                      {cred.password || '-'}
                      {cred.password && (
                        <button
                          title="Copy"
                          onClick={() => handleCopy(idx, 'password', cred.password)}
                          disabled={copied[`${idx}-password`]}
                          className={`ml-1 text-gray-400 hover:text-lime-500 transition-opacity duration-200 ${copied[`${idx}-password`] ? 'opacity-40 cursor-not-allowed' : ''}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="2" y="2" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
                        </button>
                      )}
                    </span>
                  </td>
                  <td className="pl-6 py-4">
                    <span className="inline-flex gap-3">
                      <button onClick={() => handleEdit(idx)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                      <button onClick={() => handleDelete(idx)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Passwords
