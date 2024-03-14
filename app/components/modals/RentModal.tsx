"use client"
import Modal from "./Modal"
import useRentModal from "@/app/hooks/useRentModal"

const RentModal = () => {
   const rentModal = useRentModal()
  return (
     <Modal

      isOpen={rentModal.isOpen}
      title="Airbnb your home"
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
     />
  )
}

export default RentModal