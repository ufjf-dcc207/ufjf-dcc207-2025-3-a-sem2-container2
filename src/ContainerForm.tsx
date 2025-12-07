import { Button } from "./Button.tsx"
import { Card } from "./Card.tsx"
import { CardBody } from "./CardBody.tsx"
import { CardFooter } from "./CardFooter.tsx"
import { CardHeader } from "./CardHeader.tsx"
import type { ContainerType } from "./Container.tsx"
import { ContainerMaterialBoard } from "./ContainerMaterialsBoard.tsx"
import { CustomInput } from "./CustomInput.tsx"


type ContainerFormType = {
    container: ContainerType
    handleChange?: any
    addMaterial?: any
    removeMaterial?: any
    setCurrentContainer: any
}

export function ContainerForm({ container, handleChange, addMaterial, removeMaterial, setCurrentContainer } : ContainerFormType) {
    return (
        <div className='row'>
            <Card containerCard={false}>
                <CardHeader title={container?.title ? container.title : "Novo container"}></CardHeader>
                <CardBody customStyle="row d-flex justify-content-center m-3">
                    <CustomInput customLabel={"Nome"} setName="title" setValue={container?.title} isSelect={false} type="text" divCustomStyle="col-4" handleChange={handleChange}></CustomInput>
                    <CustomInput customLabel={"Contratante"} setName="info" setValue={container?.info} isSelect={false} type="text" divCustomStyle="col-4" handleChange={handleChange}></CustomInput>
                    <CustomInput customLabel={"Tipo"} setName="type" setValue={container?.type} isSelect={true} divCustomStyle="col-4" type="select" handleChange={handleChange} options={
                        [
                            {optionLabel: "Estoque", optionValue: "stock"}, {optionLabel: "Transporte", optionValue: "transport"}
                        ]
                    }/>
                    <ContainerMaterialBoard materials={container.materials} containerType={container.type} handleChange={handleChange} addMaterial={addMaterial} removeMaterial={removeMaterial}
                        tableHeaders={container?.type === "stock" ? ["Nome", "Quantidade", "Estoque mínimo", "Data limite de reestocagem"] : 
                            ["Nome", "Quantidade", "Data de entrega"]
                        }>
                    </ContainerMaterialBoard>
                </CardBody>
                <CardFooter>
                    <Button button={{type: "action", buttonName: "Salvar", customStyle: "btn btn-primary icone-add-table"}} ></Button>
                    <Button button={{onClickFunction: () => setCurrentContainer(-1), type: "action", buttonName: "Voltar", customStyle: "btn btn-dark icone-add-table"}} ></Button>
                </CardFooter>
            </Card>
        </div>
    )
}