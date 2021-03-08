const UploadPicture = ({ uploadPicture }) => {


    return (
        <div>
            <form className={"formClass"}>
                    <label className="alignCenter">
                        <input style={{display: 'none'}} type="file" id="img" name="img" accept="image/*" onChange={(event) => uploadPicture(event)}/>
                        Upload picture
                    </label>
                    
            </form>
        </div>
    )
}

export default UploadPicture
