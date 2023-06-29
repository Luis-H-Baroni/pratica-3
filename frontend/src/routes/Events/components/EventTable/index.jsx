import React, { useState } from 'react';
import { IoTrash, IoPencilSharp } from 'react-icons/io5';
import Modal from '../../../../components/Modal';

function EventTable ({ headers, data, remove, edit }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleRemove = async (id) => {
    await remove(id);
    setOpen(false);
  }

  const handleDelete = () => {
    return (
      <Modal open={open} onClose={() => setOpen(!open)} onConfirm={() => handleRemove(id)}>
        <div className='text-center w-56'>
          <IoTrash size={56} className='mx-auto text-red-500' />
          <div className='mx-auto my-4 w-48'>
            <p>Tem certeza que deseja remover este item?</p>
          </div>
        </div>
      </Modal>
    )
  };

  const handleOpenModal = async (id) => {
    setOpen(true);
    setId(id)
  }

  const handleEdit = async (id) => {
    await edit(id);
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-5">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {headers.map((header) => (
                    <th scope="col" className="px-6 py-4" key={Math.random()} >{header.name}</th>  
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  item && (
                    <tr
                      key={`${index}-tr-${item.eventId}`} 
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-purple-100"
                    >
                      <>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.eventId}-key`}>{item.eventId}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.eventAlias}-key`}>{item.eventAlias}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={Math.random()}>{item.impact}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={Math.random()}>{item.urgency}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={`${item.configurationItemAlias}-key`}>{item.configurationItemAlias}</td>
                        <td className="whitespace-nowrap px-6 py-4" key={Math.random()}>
                          <button className="text-gray-500 hover:text-gray-700 ml-1" onClick={() => handleEdit(item.eventId) }>
                            <IoPencilSharp size={20} key={Math.random()} />
                          </button>
                          <button className="text-red-500 hover:text-red-700" onClick={() => { handleOpenModal(item.eventId) }}>
                            <IoTrash size={20} key={Math.random()} />
                          </button>
                        </td>
                      </>
                    </tr>
                  )
                ))} 
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {open && handleDelete()}
    </div>
  );
}

export default EventTable;