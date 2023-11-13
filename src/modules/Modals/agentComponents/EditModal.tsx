import React from 'react';

const EditModal = () => {
    return (
    <>
       {/* <MyModal title={modalInfo.ObjectiveTitle} isButton={false} buttonTitle={'עדכן'}  handleClose={handleClose}>
            {modalLoading?
            <div className='myCenterAlign'>
                <BallClipRotate
                    color={'#000000'}
                    loading={modalLoading}
                />
            </div>

            :
            
            <div>
                {! modalInfo.subTusk ?
                        <div>
                            {editMode ?
                                <EditableMode 
                                modalInfo={modalInfo} 
                                setEditMode={setEditMode} 
                                // register={register} 
                                // control={control}
                                handleBackToInfo={handleBackToInfo}
                                chooseAccount={chooseAccount}
                                setChoosedAccount={setChoosedAccount}
                                doneEditHandler={doneEditHandler}
                                closeEditHandler={closeEditHandler}
                                />
                            :
                                <ModalInfo 
                                canBack={false}
                                modalInfo={modalInfo} 
                                setEditMode={setEditMode}
                                closeEditHandler={closeEditHandler}
                                />
                            }
                        </div>
                :
                    <div>
                        {choosedSubTask.idDocument ?
                        
                            <div>
                            {editMode ?
                                <EditableMode 
                                modalInfo={choosedSubTask} 
                                setEditMode={setEditMode} 
                                // register={register} 
                                // control={control}
                                handleBackToInfo={handleBackToInfo}
                                chooseAccount={chooseAccount}
                                setChoosedAccount={setChoosedAccount}
                                doneEditHandler={doneEditHandler}
                                closeEditHandler={closeEditHandler}
                                />
                            :
                                <ModalInfo 
                                canBack={true}
                                modalInfo={choosedSubTask} 
                                setEditMode={setEditMode}
                                backFunction={backFunction}
                                closeEditHandler={closeEditHandler}
                                />
                            }
                            </div>
                        :
                            <SubTaskList 
                                dayName={modalInfo.dayOfWeek} 
                                subTasks={modalInfo.subTusk} 
                                hourFrom={modalInfo.startHour} 
                                hourTo={modalInfo.endHour}
                                handleSetSubTask={handleSetSubTask}
                            />
                        }
                    </div>    

                }
            </div>
            }

        </MyModal> */}
    </>
    );
};

export default EditModal;