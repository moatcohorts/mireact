import React, { useState } from "react";

const PostRequestComponent = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendPostRequest = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost/property/api/v1/create.php", {
        mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotel_name:"adeojo",hotel_contact:"jomijo",hotel_pix:"https://picsum.photos/200/",hotel_price:15000
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      const data = await response.json();
      setResponseData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={sendPostRequest}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send POST Request
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {responseData && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="font-bold">Response Data:</h3>
          <pre className="text-sm">{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PostRequestComponent;
//method 2 without async await
// import React, { useState } from "react";

// const PostRequestComponent = () => {
//   const [responseData, setResponseData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const sendPostRequest = () => {
//     setLoading(true);
//     setError(null);

//     const data2send = {hotel_name:"jojo",hotel_contact:"jomijo",hotel_pix:"https://picsum.photos/200/",hotel_price:15000}
            
        
//         const requestOptions = {
//             mode: 'no-cors',
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(data2send)
//         }

//     fetch("http://localhost/property/api/v1/create.php", requestOptions)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to send request");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setResponseData(data);
//       })
//       .catch((err) => {
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="p-4">
//       <button
//         onClick={sendPostRequest}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Send POST Request
//       </button>

//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       {responseData && (
//         <div className="mt-4 p-4 border rounded bg-gray-100">
//           <h3 className="font-bold">Response Data:</h3>
//           <pre className="text-sm">{JSON.stringify(responseData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostRequestComponent;
