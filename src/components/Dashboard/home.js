import { useRef } from "react";
import { signOutUser, dbRef, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc } from "firebase/firestore";

function Home() {
  const form = useRef();

  const submitItem = (event) => {
    event.preventDefault();

    const itemName = form.current[0]?.value;
    const itemDescription = form.current[1]?.value;
    const itemURL = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    console.log(itemName, itemDescription, itemURL, image);

    const storageRef = ref(storage, `portfolio/${image.name}`);

    uploadBytes(storageRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          savePortfolio(downloadUrl);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    const savePortfolio = (imageURL) => {
      const portfolioItem = {
        itemName,
        itemDescription,
        itemURL,
        imageURL,
      };

      addDoc(dbRef, portfolioItem)
        .then((documentRef) => {
          console.log("Document has been uploaded successfully", documentRef);
          form.current.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>You are logged in.</h1>

            <form ref={form} onSubmit={submitItem}>
              <div className='form-group'>
                <input type='text' placeholder='name' />
              </div>
              <div className='form-group'>
                <textarea placeholder='description' rows='3' />
              </div>
              <div className='form-group'>
                <input type='text' placeholder='URL' />
              </div>
              <div className='form-group'>
                <input type='file' placeholder='image' />
              </div>
              <input className='form-submit' type='submit' value='Submit' />
            </form>
          </div>
          <div className='col'>
            <button onClick={signOutUser}>Signout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
