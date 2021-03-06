import { useState, useEffect } from 'react'
import coastersService from '../../services/coasters.service'
import { Container, Modal } from 'react-bootstrap'
import CoastersList from '../../components/CoastersList/CoastersList'
import NewCoasterForm from '../../components/NewCoasterForm/NewCoasterForm'

const CoastersListPage = () => {

    const [coasters, setCoasters] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        loadCoasters()
    }, [])

    const loadCoasters = () => {
        coastersService
            .getAllCoasters()
            .then(({ data }) => setCoasters(data))
            .catch(err => console.log(err))
    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <>
            <Container>
                <h1>Galería de montañas <span onClick={handleModalOpen}>+</span></h1>
                <hr />
                <CoastersList coasters={coasters} />
            </Container>

            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCoasterForm closeModal={handleModalClose} refreshCoasters={loadCoasters} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CoastersListPage