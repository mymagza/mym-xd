import { useState, useEffect } from 'react';
import './App.css';

function generateKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let key = 'MYM-';
  for (let i = 0; i < 10; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}

function App() {
  const [generatedKey, setGeneratedKey] = useState('');
  const [inputKey, setInputKey] = useState('');
  const [access, setAccess] = useState(false);

  useEffect(() => {
    const key = generateKey();
    setGeneratedKey(key);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedKey);
    alert('คัดลอกคีย์แล้ว!');
  };

  const handleCheck = () => {
    if (inputKey === generatedKey) {
      setAccess(true);
    } else {
      alert('คีย์ไม่ถูกต้อง');
    }
  };

  if (access) {
    return (
      <div className='app'>
        <h1>ยินดีต้อนรับสู่ MYM XD</h1>
        <p>คุณสามารถเข้าหน้าหลักได้แล้ว 🎉</p>
      </div>
    );
  }

  return (
    <div className='app'>
      <h1>MYM XD - ระบบตรวจสอบคีย์</h1>
      <p className='key-box'>{generatedKey}</p>
      <button onClick={handleCopy} className='button'>คัดลอกคีย์</button>
      <input
        className='input'
        placeholder='วางคีย์ที่นี่'
        value={inputKey}
        onChange={(e) => setInputKey(e.target.value)}
      />
      <button onClick={handleCheck} className='button green'>ตรวจสอบ</button>
    </div>
  );
}

export default App;
