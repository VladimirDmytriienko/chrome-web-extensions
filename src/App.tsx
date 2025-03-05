import { Button } from './components/ui/button'


function App() {

  const onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          document.body.style.backgroundColor = 'green';
          alert('alertalertalert');
        }
      });
    }
  }
  return (
    <div className="= h-100 grid place-items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      CHROME WEB EXTENSION
      <Button onClick={onclick}>alert</Button>
    </div>
  )
}

export default App
