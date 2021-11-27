export default function onWhatsappLoaded(onLoadedHandler) {

    let observer = new MutationObserver(_ => {
        var chatList = document.querySelector('[aria-label="Chat list"]');
        if (chatList)
            observer.disconnect()
        else
            return;

        onLoadedHandler();

    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });

}
