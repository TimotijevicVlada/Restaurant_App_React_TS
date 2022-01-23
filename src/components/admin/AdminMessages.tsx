import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';
import { MessagesProps } from '../../context/Context';

const AdminMessages = () => {

    const { messages, setMessages } = useContext(ProductsContext);

    const handleDelete = (item: MessagesProps) => {
        const deleted = messages.filter(elem => elem.id !== item.id);
        setMessages(deleted);
    }

    return (
        <div className='admin_messages'>
            <h2>My messages</h2>
            <div className='admin_messages_content'>
                {messages.length < 1 ? <div className='admin_no_messages'>You don't have any messages!</div> :
                    messages.map((item, index) => (
                        <div className='admin_msg' key={index}>
                            <div className='admin_wrapper'>
                                <div className='admin_msg_left'>
                                    <div className='admin_filed'>
                                        <label>Email</label>
                                        <div>{item.email}</div>
                                    </div>
                                    <div className='admin_filed'>
                                        <label>Phone</label>
                                        <div>{item.phone}</div>
                                    </div>
                                    <div className='admin_filed'>
                                        <label>Address</label>
                                        <div>{item.address}</div>
                                    </div>
                                </div>
                                <div className='admin_msg_right'>
                                    <div className='admin_filed'>
                                        <label>Title</label>
                                        <div>{item.title}</div>
                                    </div>
                                    <div className='admin_filed message'>
                                        <label>Message</label>
                                        <div>{item.message}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='msg_footer'>
                                <span className='date'>{item.date}</span>
                                <button onClick={() => handleDelete(item)}>Delete</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AdminMessages;
