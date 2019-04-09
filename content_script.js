walk(document.body);

function walk(node)
{var child, next;

    switch (node.nodeType)
    {
        case 1: //Element
        case 9: //Document
        case 11: // Document fragement
            child = node.firstChild;
            while (child)
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
        default:
            break;
    }
}

function handleText(textNode)
{
    var text = textNode.nodeValue;

    text = text.replace(/TRUMP/gi, 'DRUMPF');
    text = text.replace(/Trump/gi, 'Drumpf');
    text = text.replace(/trump/gi, 'drumpf');
    text = text.replace(/\btrump\b/gi, 'drumpf');
    text = text.replace(/Make America Great Again/gi, 'Make America Drumpf Again');
    text = text.replace(/make America great again/gi, 'make America Drumpf again');
    text = text.replace(/MakeAmericaGreatAgain/gi, 'MakeAmericaDrumpfAgain');
    text = text.replace(/Hamburger/gi, 'Hamberder');
    text = text.replace(/hamburger/gi, 'hamberder');
    text = text.replace(/unprecedented/gi, 'unpresidented');
    text = text.replace(/Tim Cook/gi, 'Tim Apple');
    text = text.replace(/coffee/gi, 'covfefe');
    text = text.replace(/coverage/gi, 'covfefe');
    text = text.replace(/origins/gi, 'oranges');
    text = text.replace(/big league/gi, 'bigly');
    textNode.nodeValue = text;
}