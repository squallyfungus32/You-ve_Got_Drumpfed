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

    text = text.replace(/TRUMP/g, 'DRUMPF');
    text = text.replace(/Trump/g, 'Drumpf');
    text = text.replace(/trump/g, 'drumpf');
    text = text.replace(/\btrump\b/g, 'drumpf');
    text = text.replace(/Make America Great Again/g, 'Make America Drumpf Again');
    text = text.replace(/make America great again/g, 'make America Drumpf again');
    text = text.replace(/MakeAmericaGreatAgain/gi, 'MakeAmericaDrumpfAgain');
    text = text.replace(/burger/g, 'berder');
    text = text.replace(/Burger/g, 'Berder');
    text = text.replace(/unprecedented/gi, 'unpresidented');
    text = text.replace(/Tim Cook/gi, 'Tim Apple');
    text = text.replace(/coffee/gi, 'covfefe');
    text = text.replace(/coverage/gi, 'covfefe');
    text = text.replace(/origins/gi, 'oranges');
    text = text.replace(/big league/gi, 'bigly');
    text = text.replace(/big /g, 'bigly ');
    text = text.replace(/Big /g, 'Bigly ');
    text = text.replace(/huge/g, 'yuge');
    text = text.replace(/Huge/g, 'Yuge');
    text = text.replace(/Nepal/gi, 'Nipple');
    text = text.replace(/Bhutan/gi, 'Button');
    text = text.replace(/counsel/gi, 'concel');
    text = text.replace(/honored/gi, 'honered');
    text = text.replace(/too great/gi, 'to great');
    text = text.replace(/attacker/g, 'attaker');
    text = text.replace(/Attacker/g, 'Attaker');
    text = text.replace(/Denmark/gi, 'Denmakr');
    text = text.replace(/San Bernardino/gi, 'San Bernadino');
    text = text.replace(/Colombia/gi, 'Columbia');
    text = text.replace(/Theresa May/gi, 'Teresa May');        

    textNode.nodeValue = text;
}