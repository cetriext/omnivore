/* eslint-disable @next/next/no-img-element */
import { Box, HStack, SpanBox } from '../../components/elements/LayoutPrimitives'
import { PrimaryLayout } from '../../components/templates/PrimaryLayout'
import { Button } from '../../components/elements/Button'
import Link from 'next/link'
import { StyledText } from '../../components/elements/StyledText'
import { styled } from '@stitches/react'

export default function Newsletters(): JSX.Element {
  const HighlightText = styled(SpanBox, {
    padding: '2px',
    background: '$highlightBackground',
  })

  return (
    <PrimaryLayout
      pageMetaDataProps={{
        title: 'Reading Newsletters in Omnivore',
        path: '/help/newsletters',
      }}
      pageTestId="help-newsletters-tag"
    >
      <Box
        css={{
          m: '42px',
          maxWidth: '640px',
          color: '$grayText',
          img: {
            maxWidth: '85%',
          },
          '@smDown': {
            m: '16px',
            maxWidth: '85%',
            alignSelf: 'center',
          },
        }}
      >
        <h1>All your Newsletters in One Place</h1>
        <hr />
        <p>There are two ways to have newsletters delivered directly to your Omnivore Library:</p>
        <ul>
          <li><Link href="#directly">Subscribe directly to the newsletter with an Omnivore email address</Link></li>
          <li><Link href="#forwarding">Create a forwarding rule to forward emails from your regular email account to your Omnivore email address</Link></li>
        </ul>
        
        <h2>Omnivore Email Addresses</h2>
        <p>Omnivore allows you to create unique email addresses for subscribing to email newsletters. You can reuse one address for all your newsletters, or you can create a unique address for each.</p>
        <p>An Omnivore email address will receive email, detect whether the email is a newsletter, and add the newsletter content to your library. If the email does not appear to be an email, it will be forwarded to the email address you used when you registered for Omnivore.</p>

        <h2>Notifications</h2>
        <p>If you are a registered iOS user and have granted push notification permission to Omnivore, you will be sent a notification when a newsletter is added to your library. Otherwise, you will be notified via your registered email address.</p>

        <h2 id="directly">Subscribing directly to a newsletter with an Omnivore Email Address</h2>
        <p>Create your first email address by clicking the <HighlightText>Create New Email</HighlightText> button on the <Link href='/settings/subscriptions/newsletters'>newsletters page</Link>. Copy the email address to your clipboard, and enter that email address into an email subscription box. If you are already logged into Substack you might need to logout to use your new email address.</p>

        <HStack distribution="center" css={{ width: '100%', my: '32px' }}>
          <img
            src="/static/help/newsletter-email-signup.gif"
            alt="Animated image setting up an Omnivore Email Address"
          />
        </HStack>

        <h2 id="forwarding">Creating forwarding rules to forward emails from your regular email account to your Omnivore email address</h2>

        <p>If you are a Gmail user you can create a forwarding rule to send email from your regular account to your Omnivore email address. This is useful if you have an existing paid newsletter subscription. For free newsletters we recommend subscribing directly to the newsletter with your Omnivore email address.</p>

        <p>Before you start:</p>
        <ul>
          <li>Create an Omnivore Email Address by clicking the <HighlightText>Create New Email</HighlightText> button on the <Link href='/settings/subscriptions/newsletters'>newsletters page</Link>.</li>
          <li>Make a note of the Newsletter&apos;s sender email address. For example <code>omnivore@substack.com</code>.</li>
        </ul>

        <p>Create a forwarding rule:</p>
        <ul>
          <li>On a computer open your <Link href="https://mail.google.com/mail/u/0/#settings/fwdandpop">Gmail Forwarding Rules</Link>. <code>If clicking the Gmail Forwarding Rules link does not work: click on the Gear icon in the upper right corner of Gmail and select All Settings, then click the Forwarding and POP/IMAP tab</code></li>
          <li>In the <HighlightText>Forwarding</HighlightText> section click <HighlightText>Add a forwarding address</HighlightText>.</li>
          <li>Enter your Omnivore Email Address (eg <code>username-sdfsd@inbox.omnivore.app</code>) and click Next.</li>
          <li>Click Proceed</li>
          <li>Click OK</li>
          <li><HighlightText>Refresh the Omnivore Newsletter Emails page and you should see a code appear beside your address</HighlightText> (eg 663421251). Copy this code to your clipboard.</li>
          <li>Return to your forwarding rules section and look for the confirm code text box. Enter the confirmation code you copied and click <code>Verify</code>.</li>
          <li>In the forwarding section of Gmail, Click on <HighlightText>Creating a Filter</HighlightText></li>
          <li>Add the email address of your newsletter (eg omnivore@substack.app) in the <code>From</code> section.</li>
          <li>Click <code>Create Filter</code></li>
          <li>Choose <HighlightText>Forward it to</HighlightText> and enter your Omnivore Email Address (eg  <code>username-sdfsd@inbox.omnivore.app</code>)</li>
          <li>Click <code>Create Filter</code> at the bottom of the dialog.</li>
        </ul>

      </Box>
    </PrimaryLayout>
  )
}
