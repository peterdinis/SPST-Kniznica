import { SmallModal } from "@/components/shared/modals"
import { Input, Button, Text } from "@chakra-ui/react"

const DeleteModals: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 ">Zmazať účet študentovi</div>
              <div className="px-4 py-2 text-red-500">
                <SmallModal
                  modalButtonText={"Zmazať účet študentovi"}
                  modalHeaderText={"Zmazať účet študentovi"}
                  modalCloseText={"Zatvor"}
                >
                  <form action="#">
                    <Input type="text" placeholder="Študent username" />
                    <Button mt={4} color="whiteAlpha.800" backgroundColor="red.700">Zmaž</Button>
                    <Text mt={8} color="red.700" fontWeight={"bold"}>
                      Systém pred zmazaním účtu kontroluje či študent nemal požičané knihy ak má vráti ich
                    </Text>
                  </form>
                </SmallModal>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2  ">Zmazať učet učiteľovi</div>
              <div className="px-4 py-2 text-red-500 ">
                <SmallModal
                  modalButtonText={"Zmazať účet učiteľovi"}
                  modalHeaderText={"Zmazať účet učiteľovi"}
                  modalCloseText={"Zatvor"}
                >
                  <form action="#">
                    <Input type="text" placeholder="Učiteľ username" />
                    <Button mt={4} color="whiteAlpha.800" backgroundColor="red.700">Zmaž</Button>
                    <Text mt={8} color="red.700" fontWeight={"bold"}>
                      Systém pred zmazaním účtu kontroluje či učiteľ nemal požičané knihy ak má vráti ich
                    </Text>
                  </form>
                </SmallModal>
              </div>
            </div>
        </>
    )
}

export default DeleteModals