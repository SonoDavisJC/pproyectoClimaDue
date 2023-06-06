interface Props {
    msjError: string,
    titleError: string
}

const MensajeError = ({msjError, titleError = "Error Title"}: Props) => {
    return (
        <div className="mensage__error">
            <p className="mensage__error-title">{titleError}</p>
            <p className="mensage__error-text"><b>{msjError}</b></p>
        </div>
    )
}

export default MensajeError;