import { Metadata } from "next";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Essio AI",
  description: "Privacy Policy for Essio AI - Learn how we collect, use, and protect your personal information",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Essio AI",
    description: "Privacy Policy for Essio AI - Learn how we collect, use, and protect your personal information",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Essio AI",
    description: "Privacy Policy for Essio AI - Learn how we collect, use, and protect your personal information",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="prose prose-gray dark:prose-invert max-w-4xl mx-auto">
        <article className="text-white select-none">
          <h1>ESSIO Privacy Policy</h1>
          <p className="text-sm">Last Updated: February 9, 2025</p>

          <h2 className="text-2xl font-bold mt-8">1. Introduction</h2>
          <p>
            This Privacy Notice describes how Essio AI, Inc. (&quot;Essio,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) collects, uses, and shares your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8">2. Do We Use Cookies and Other Tracking Technologies?</h2>
          <p className="font-semibold">
            In Short: We may use cookies and other tracking technologies to collect and store your information.
          </p>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information
            when you interact with our Services.
          </p>

          <h3 className="text-xl font-bold mt-4">Types of Tracking Technologies Used:</h3>
          <ul>
            <li>
              <strong>Essential Technologies:</strong> To maintain the security of our Services and your account,
              prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
            </li>
            <li>
              <strong>Third-Party Technologies:</strong> We permit third parties and service providers to use online
              tracking technologies on our Services for:
              <ul>
                <li>
                  <strong>Analytics:</strong> To understand how our Services are used.
                </li>
                <li>
                  <strong>Advertising:</strong>
                  <ul>
                    <li>To manage and display advertisements.</li>
                    <li>To tailor advertisements to your interests.</li>
                    <li>To send abandoned shopping cart reminders (depending on your communication preferences).</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">3. How Do We Handle Your Social Logins?</h2>
          <p className="font-semibold">
            In Short: If you choose to register or log in to our Services using a social media account, we may have
            access to certain information about you.
          </p>

          <h3 className="text-xl font-bold mt-4">Information We May Receive:</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Friends list</li>
            <li>Profile picture</li>
            <li>Other information you choose to make public on the social media platform</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">4. Is Your Information Transferred Internationally?</h2>
          <p className="font-semibold">
            In Short: We may transfer, store, and process your information in countries other than your own.
          </p>

          <p>
            <strong>Server Location:</strong> Our servers are located in Germany.
          </p>

          <h3 className="text-xl font-bold mt-4">International Transfers:</h3>
          <p>
            If you access our Services from outside the United States, your information may be transferred to, stored,
            and processed by us and our third-party service providers in:
          </p>
          <ul>
            <li>United States</li>
            <li>Taiwan</li>
            <li>Philippines</li>
            <li>Other countries</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">5. How Long Do We Keep Your Information?</h2>
          <p className="font-semibold">
            In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy
            Notice unless otherwise required by law.
          </p>

          <h2 className="text-2xl font-bold mt-8">6. How Do We Keep Your Information Safe?</h2>
          <p className="font-semibold">
            In Short: We aim to protect your personal information through a system of organizational and technical
            security measures.
          </p>

          <h2 className="text-2xl font-bold mt-8">7. Do We Collect Information from Minors?</h2>
          <p className="font-semibold">
            In Short: We do not knowingly collect data from or market to children under 18 years of age.
          </p>

          <h2 className="text-2xl font-bold mt-8">8. What Are Your Privacy Rights?</h2>
          <p className="font-semibold">
            In Short: Depending on your state of residence in the US or in regions like the EEA, UK, Switzerland, and
            Canada, you have rights that allow you greater access to and control over your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8">9. Controls for Do-Not-Track Features</h2>
          <p>
            We do not currently respond to Do-Not-Track (&quot;DNT&quot;) browser signals because no uniform technology
            standard for recognizing and implementing DNT signals has been finalized.
          </p>

          <h2 className="text-2xl font-bold mt-8">10. Do United States Residents Have Specific Privacy Rights?</h2>
          <p className="font-semibold">
            In Short: If you are a resident of California, you may have specific rights regarding your personal
            information, including access, correction, deletion, and opting out of certain processing.
          </p>

          <h2 className="text-2xl font-bold mt-8">11. Do We Make Updates to This Notice?</h2>
          <p className="font-semibold">
            In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
          </p>

          <h2 className="text-2xl font-bold mt-8">12. How Can You Contact Us About This Notice?</h2>
          <p>Contact Details:</p>
          <ul>
            <li>Email: support@essio.ai</li>
            <li>Phone: +1 (855) 234-5020</li>
            <li>Post: Essio AI Inc. Data Protection Officer 8 The Grn Ste D Dover, DE 19901</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">
            13. How Can You Review, Update, or Delete the Data We Collect From You?
          </h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we collect from you.</li>
            <li>Request details about how we have processed your personal information.</li>
            <li>Correct inaccuracies in your personal information.</li>
            <li>Delete your personal information.</li>
            <li>Request we limit the use or disclosure of your personal information.</li>
            <li>Withdraw your consent to our processing of your personal information.</li>
          </ul>

          <p className="mt-4">
            <strong>Important Note:</strong> These rights may be limited in some circumstances by applicable law. To
            request to review, update, or delete your personal information, please contact us at{" "}
            <a href="mailto:support@essio.ai" className="text-primary">
              support@essio.ai
            </a>
          </p>

          <div itemScope itemType="http://schema.org/WebPage">
            <meta itemProp="name" content="Privacy Policy | Essio AI" />
            <meta
              itemProp="description"
              content="Privacy Policy for Essio AI - Learn how we collect, use, and protect your personal information"
            />
            <meta itemProp="lastReviewed" content="2025-02-09" />
          </div>
        </article>
      </div>
      <FooterSection />
    </div>
  );
}
