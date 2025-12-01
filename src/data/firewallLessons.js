import { Shield, Lock, Globe, Server, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export const lessons = [
    { 
        id: 1, title: "What is a Firewall?", difficulty: "Beginner", duration: "5 min", rating: 4.8, topics: 3, icon: Shield, color: "bg-blue-500",
        description: "Learn the fundamental concepts of firewalls and their role in network security.",
        content: [
            { type: "intro", text: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Think of it as a barrier between your trusted internal network and untrusted external networks." },
            { type: "section", title: "Key Concepts", points: ["Acts as a gatekeeper for network traffic", "Filters packets based on rules", "First line of defense in network security", "Can be hardware or software-based"] },
            { type: "section", title: "Why Firewalls Matter", points: ["Prevent unauthorized access", "Block malicious traffic", "Monitor network activity", "Enforce security policies"] }
        ],
        objectives: ["Understand what a firewall is", "Learn how firewalls protect networks", "Identify different firewall use cases"],
        quiz: [
            { 
                question: "What is the primary function of a firewall?", 
                options: ["To increase internet speed", "To monitor and control network traffic based on security rules", "To store backup files", "To manage email"],
                answer: "To monitor and control network traffic based on security rules" 
            },
            { 
                question: "Where does a firewall typically sit in a network?", 
                options: ["Inside each computer", "Between the trusted internal network and untrusted external networks", "Only in wireless routers", "In the cloud only"],
                answer: "Between the trusted internal network and untrusted external networks" 
            },
            { 
                question: "Can a firewall be both hardware and software-based?", 
                options: ["No, only hardware", "No, only software", "Yes, firewalls can be implemented as physical devices or software applications", "Only cloud-based"],
                answer: "Yes, firewalls can be implemented as physical devices or software applications" 
            }
        ]
    },
    { 
        id: 2, title: "Types of Firewalls", difficulty: "Beginner", duration: "8 min", rating: 4.7, topics: 5, icon: Globe, color: "bg-green-500",
        description: "Explore different types of firewalls and their specific use cases.",
        content: [
            { type: "intro", text: "Firewalls come in various types, each designed for specific security needs and network architectures." },
            { type: "section", title: "Hardware Firewalls", points: ["Physical devices placed at network perimeter", "High performance for enterprise networks", "Dedicated processing power", "Expensive but robust"] },
            { type: "section", title: "Software Firewalls", points: ["Installed on individual computers", "Flexible and easy to configure", "Cost-effective for small networks", "Operating system dependent"] },
            { type: "section", title: "Cloud Firewalls", points: ["Hosted in the cloud", "Scalable and flexible", "Managed by cloud providers", "Ideal for modern cloud architectures"] }
        ],
        objectives: ["Distinguish between hardware and software firewalls", "Understand cloud firewall benefits", "Choose the right firewall type for your needs"],
        quiz: [
            { 
                question: "Which firewall type is best for protecting individual computers?", 
                options: ["Hardware firewall", "Software firewall", "Cloud firewall", "Physical firewall"],
                answer: "Software firewall" 
            },
            { 
                question: "What is a key advantage of cloud firewalls?", 
                options: ["They are expensive", "They only work offline", "They are scalable, flexible, and managed by cloud providers", "They replace all other security"],
                answer: "They are scalable, flexible, and managed by cloud providers" 
            },
            { 
                question: "Why are hardware firewalls preferred for enterprise networks?", 
                options: ["They are cheaper", "They offer high performance with dedicated processing power and robust security", "They are easier to configure", "They don't require updates"],
                answer: "They offer high performance with dedicated processing power and robust security" 
            }
        ]
    },
    { 
        id: 3, title: "Packet Filtering Basics", difficulty: "Beginner", duration: "10 min", rating: 4.6, topics: 4, icon: Server, color: "bg-purple-500",
        description: "Master the fundamentals of packet filtering and how firewalls analyze network traffic.",
        content: [
            { type: "intro", text: "Packet filtering is the most basic form of firewall protection, examining each packet of data and deciding whether to allow or block it." },
            { type: "section", title: "How Packet Filtering Works", points: ["Examines packet headers", "Checks source and destination IP addresses", "Verifies port numbers", "Makes allow/deny decisions"] },
            { type: "section", title: "Filtering Criteria", points: ["Source IP address", "Destination IP address", "Protocol type (TCP, UDP, ICMP)", "Port numbers"] }
        ],
        objectives: ["Understand packet structure", "Learn filtering criteria", "Create basic filtering rules"],
        quiz: [
            { 
                question: "What information does a packet filter examine?", 
                options: ["Only file names", "IP addresses, ports, and protocol types", "User passwords", "Email content"],
                answer: "IP addresses, ports, and protocol types" 
            },
            { 
                question: "What are the main protocol types checked by packet filters?", 
                options: ["HTTP, FTP, SMTP", "TCP, UDP, and ICMP", "HTML, CSS, JavaScript", "Windows, Mac, Linux"],
                answer: "TCP, UDP, and ICMP" 
            },
            { 
                question: "What decision does a packet filter make after examining a packet?", 
                options: ["Whether to encrypt it", "Whether to allow or deny the packet based on predefined rules", "Whether to store it", "Whether to compress it"],
                answer: "Whether to allow or deny the packet based on predefined rules" 
            }
        ]
    },
    { 
        id: 4, title: "Stateful vs Stateless Firewalls", difficulty: "Intermediate", duration: "15 min", rating: 4.9, topics: 6, icon: Lock, color: "bg-orange-500", 
        description: "Compare stateful and stateless firewall architectures.", 
        content: [{ type: "intro", text: "Understanding the difference between stateful and stateless firewalls is crucial for network security design." }], 
        objectives: ["Differentiate stateful and stateless firewalls", "Understand connection tracking"], 
        quiz: [
            { 
                question: "What is the main difference between stateful and stateless firewalls?", 
                options: ["Cost difference", "Stateful firewalls track connection states while stateless firewalls examine each packet independently", "Color coding", "Location in network"],
                answer: "Stateful firewalls track connection states while stateless firewalls examine each packet independently" 
            },
            { 
                question: "Which firewall type provides better security?", 
                options: ["Stateless is always better", "Stateful firewalls provide better security by maintaining context of connections", "They are exactly the same", "Neither provides security"],
                answer: "Stateful firewalls provide better security by maintaining context of connections" 
            }
        ] 
    },
    { 
        id: 5, title: "Firewall Rules & Policies", difficulty: "Beginner", duration: "12 min", rating: 4.5, topics: 5, icon: CheckCircle, color: "bg-teal-500", 
        description: "Learn to create and manage firewall rules effectively.", 
        content: [{ type: "intro", text: "Firewall rules define what traffic is allowed or blocked in your network." }], 
        objectives: ["Create effective firewall rules", "Understand rule priority"], 
        quiz: [
            { 
                question: "What determines which firewall rule is applied first?", 
                options: ["Random selection", "Rule priority - rules are processed from top to bottom", "Alphabetical order", "Size of the rule"],
                answer: "Rule priority - rules are processed from top to bottom" 
            },
            { 
                question: "What should be the last rule in a firewall policy?", 
                options: ["An allow all rule", "A default deny rule to block all unmatched traffic", "No last rule needed", "A logging rule"],
                answer: "A default deny rule to block all unmatched traffic" 
            },
            { 
                question: "Why is rule order important in firewall configuration?", 
                options: ["It makes rules look organized", "Because the first matching rule is applied and subsequent rules are ignored", "It doesn't matter", "For documentation purposes only"],
                answer: "Because the first matching rule is applied and subsequent rules are ignored" 
            }
        ] 
    },
    { 
        id: 6, title: "Network Address Translation", difficulty: "Intermediate", duration: "18 min", rating: 4.8, topics: 7, icon: Globe, color: "bg-indigo-500", 
        description: "Deep dive into NAT and its role in modern networking.", 
        content: [{ type: "intro", text: "NAT allows multiple devices to share a single public IP address." }], 
        objectives: ["Understand NAT concepts", "Configure basic NAT"], 
        quiz: [
            { 
                question: "What is the primary purpose of NAT?", 
                options: ["To slow down traffic", "To allow multiple devices on a private network to share a single public IP address", "To encrypt data", "To block viruses"],
                answer: "To allow multiple devices on a private network to share a single public IP address" 
            },
            { 
                question: "What are the two main types of NAT?", 
                options: ["Fast and Slow NAT", "Static NAT and Dynamic NAT (including PAT/Port Address Translation)", "Hardware and Software NAT", "Internal and External NAT"],
                answer: "Static NAT and Dynamic NAT (including PAT/Port Address Translation)" 
            }
        ] 
    },
    { 
        id: 7, title: "Port Forwarding Explained", difficulty: "Intermediate", duration: "14 min", rating: 4.6, topics: 5, icon: Server, color: "bg-pink-500", 
        description: "Master port forwarding techniques for hosting services.", 
        content: [{ type: "intro", text: "Port forwarding directs external traffic to internal network devices." }], 
        objectives: ["Configure port forwarding", "Understand security implications"], 
        quiz: [
            { 
                question: "What is port forwarding used for?", 
                options: ["To speed up internet", "To redirect external traffic from a specific port to an internal device on the network", "To block all traffic", "To encrypt emails"],
                answer: "To redirect external traffic from a specific port to an internal device on the network" 
            },
            { 
                question: "What security risk does port forwarding introduce?", 
                options: ["None at all", "It makes internet slower", "It exposes internal services to the internet, potentially creating vulnerabilities", "It blocks all security"],
                answer: "It exposes internal services to the internet, potentially creating vulnerabilities" 
            },
            { 
                question: "What information is needed to configure port forwarding?", 
                options: ["Only the device name", "External port, internal IP address, internal port, and protocol type", "Just the IP address", "Only the password"],
                answer: "External port, internal IP address, internal port, and protocol type" 
            }
        ] 
    },
    { 
        id: 8, title: "DMZ Configuration", difficulty: "Intermediate", duration: "20 min", rating: 4.7, topics: 6, icon: Shield, color: "bg-red-500", 
        description: "Set up a demilitarized zone for public-facing services.", 
        content: [{ type: "intro", text: "A DMZ adds an extra layer of security for public services." }], 
        objectives: ["Design DMZ architecture", "Implement DMZ security"], 
        quiz: [
            { 
                question: "What is a DMZ in network security?", 
                options: ["A demilitarized zone is a separate network segment that isolates public-facing services from the internal network", "A type of firewall", "A virus scanner", "A backup system"],
                answer: "A demilitarized zone is a separate network segment that isolates public-facing services from the internal network" 
            },
            { 
                question: "What types of servers are typically placed in a DMZ?", 
                options: ["Personal computers", "Web servers, email servers, and other public-facing services", "Printers only", "Gaming consoles"],
                answer: "Web servers, email servers, and other public-facing services" 
            }
        ] 
    },
    { 
        id: 9, title: "Intrusion Detection Systems", difficulty: "Hard", duration: "25 min", rating: 4.9, topics: 8, icon: AlertTriangle, color: "bg-yellow-500", 
        description: "Integrate IDS with your firewall for advanced threat detection.", 
        content: [{ type: "intro", text: "IDS monitors network traffic for suspicious activity and known threats." }], 
        objectives: ["Deploy IDS solutions", "Analyze IDS alerts"], 
        quiz: [
            { 
                question: "What is the difference between IDS and IPS?", 
                options: ["They are the same thing", "IDS detects and alerts on threats, while IPS can actively block or prevent them", "IPS is older technology", "IDS is only for wireless"],
                answer: "IDS detects and alerts on threats, while IPS can actively block or prevent them" 
            },
            { 
                question: "What are the two main types of IDS detection methods?", 
                options: ["Fast and slow", "Signature-based detection and anomaly-based detection", "Hardware and software", "Internal and external"],
                answer: "Signature-based detection and anomaly-based detection" 
            },
            { 
                question: "Where should an IDS be positioned in the network?", 
                options: ["Only outside the firewall", "Behind the firewall to monitor internal traffic and detect threats that bypass perimeter defenses", "On every computer", "In the cloud only"],
                answer: "Behind the firewall to monitor internal traffic and detect threats that bypass perimeter defenses" 
            }
        ] 
    },
    { 
        id: 10, title: "Deep Packet Inspection", difficulty: "Hard", duration: "22 min", rating: 4.8, topics: 7, icon: Lock, color: "bg-cyan-500", 
        description: "Learn advanced packet analysis techniques.", 
        content: [{ type: "intro", text: "DPI examines the data part of packets for advanced filtering." }], 
        objectives: ["Understand DPI technology", "Implement DPI rules"], 
        quiz: [
            { 
                question: "What does Deep Packet Inspection examine?", 
                options: ["Only packet headers", "The actual data payload of packets, not just headers", "IP addresses only", "Nothing"],
                answer: "The actual data payload of packets, not just headers" 
            },
            { 
                question: "How does DPI differ from traditional packet filtering?", 
                options: ["It's slower", "DPI analyzes packet content and application data, while packet filtering only checks headers", "They are the same", "DPI only works on Sundays"],
                answer: "DPI analyzes packet content and application data, while packet filtering only checks headers" 
            }
        ] 
    },
    { 
        id: 11, title: "Application Layer Firewalls", difficulty: "Hard", duration: "28 min", rating: 4.9, topics: 9, icon: Globe, color: "bg-violet-500", 
        description: "Protect applications with layer 7 firewall capabilities.", 
        content: [{ type: "intro", text: "Application layer firewalls provide granular control over application traffic." }], 
        objectives: ["Configure WAF rules", "Protect web applications"], 
        quiz: [
            { 
                question: "At which OSI layer do application layer firewalls operate?", 
                options: ["Layer 1 - Physical", "Layer 4 - Transport", "Layer 7 - the Application Layer", "Layer 2 - Data Link"],
                answer: "Layer 7 - the Application Layer" 
            },
            { 
                question: "What is a WAF?", 
                options: ["Wireless Application Filter", "A Web Application Firewall that protects web applications from HTTP-based attacks", "Wide Area Firewall", "Windows Application Framework"],
                answer: "A Web Application Firewall that protects web applications from HTTP-based attacks" 
            },
            { 
                question: "What types of attacks can a WAF prevent?", 
                options: ["Only DDoS attacks", "SQL injection, cross-site scripting (XSS), and other web application vulnerabilities", "Physical attacks", "Power outages"],
                answer: "SQL injection, cross-site scripting (XSS), and other web application vulnerabilities" 
            }
        ] 
    },
    { 
        id: 12, title: "VPN and Firewall Integration", difficulty: "Intermediate", duration: "16 min", rating: 4.7, topics: 6, icon: Shield, color: "bg-emerald-500", 
        description: "Secure remote access with VPN firewall integration.", 
        content: [{ type: "intro", text: "VPNs create encrypted tunnels through your firewall for remote users." }], 
        objectives: ["Configure VPN access", "Manage VPN security"], 
        quiz: [
            { 
                question: "What is the primary benefit of VPN integration with firewalls?", 
                options: ["Faster internet speed", "It provides secure encrypted remote access while maintaining firewall protection", "Cheaper costs", "Better graphics"],
                answer: "It provides secure encrypted remote access while maintaining firewall protection" 
            },
            { 
                question: "What are the two main types of VPNs?", 
                options: ["Fast and Slow VPNs", "Site-to-site VPNs and remote access VPNs", "Public and Private VPNs", "Mobile and Desktop VPNs"],
                answer: "Site-to-site VPNs and remote access VPNs" 
            }
        ] 
    },
    { 
        id: 13, title: "Firewall Logging & Monitoring", difficulty: "Intermediate", duration: "14 min", rating: 4.5, topics: 5, icon: Server, color: "bg-amber-500", 
        description: "Monitor and analyze firewall logs for security insights.", 
        content: [{ type: "intro", text: "Proper logging is essential for security monitoring and compliance." }], 
        objectives: ["Configure logging", "Analyze log data"], 
        quiz: [
            { 
                question: "Why is firewall logging important?", 
                options: ["It's not important", "For security monitoring, incident response, compliance, and forensic analysis", "Only for decoration", "To slow down the firewall"],
                answer: "For security monitoring, incident response, compliance, and forensic analysis" 
            },
            { 
                question: "What information should firewall logs typically contain?", 
                options: ["Only usernames", "Source/destination IPs, ports, protocols, action taken (allow/deny), and timestamps", "Just timestamps", "Only passwords"],
                answer: "Source/destination IPs, ports, protocols, action taken (allow/deny), and timestamps" 
            },
            { 
                question: "How often should firewall logs be reviewed?", 
                options: ["Never", "Once a year", "Regularly and continuously, ideally with automated monitoring and alerting systems", "Only when problems occur"],
                answer: "Regularly and continuously, ideally with automated monitoring and alerting systems" 
            }
        ] 
    },
    { 
        id: 14, title: "Zero Trust Architecture", difficulty: "Hard", duration: "30 min", rating: 5.0, topics: 10, icon: Lock, color: "bg-rose-500", 
        description: "Implement zero trust security principles.", 
        content: [{ type: "intro", text: "Zero trust assumes no user or device is trusted by default." }], 
        objectives: ["Design zero trust networks", "Implement least privilege"], 
        quiz: [
            { 
                question: "What is the core principle of Zero Trust?", 
                options: ["Trust everyone", "Never trust, always verify - no user or device is trusted by default", "Only trust internal users", "Trust all devices"],
                answer: "Never trust, always verify - no user or device is trusted by default" 
            },
            { 
                question: "What does 'least privilege access' mean in Zero Trust?", 
                options: ["Give everyone full access", "Users and systems are granted only the minimum access necessary to perform their functions", "No one gets any access", "Only administrators get access"],
                answer: "Users and systems are granted only the minimum access necessary to perform their functions" 
            }
        ] 
    },
    { 
        id: 15, title: "Cloud Firewall Solutions", difficulty: "Intermediate", duration: "17 min", rating: 4.8, topics: 7, icon: Globe, color: "bg-lime-500", 
        description: "Deploy and manage firewalls in cloud environments.", 
        content: [{ type: "intro", text: "Cloud firewalls provide security for cloud-native applications." }], 
        objectives: ["Configure cloud firewalls", "Manage multi-cloud security"], 
        quiz: [
            { 
                question: "How do cloud firewalls differ from traditional firewalls?", 
                options: ["They don't differ", "They are software-defined, scalable, and managed through cloud provider APIs", "They are slower", "They are more expensive"],
                answer: "They are software-defined, scalable, and managed through cloud provider APIs" 
            },
            { 
                question: "What is a security group in cloud computing?", 
                options: ["A team of security experts", "A virtual firewall that controls inbound and outbound traffic for cloud resources", "A physical device", "A type of malware"],
                answer: "A virtual firewall that controls inbound and outbound traffic for cloud resources" 
            },
            { 
                question: "What challenge does multi-cloud security present?", 
                options: ["No challenges", "Managing consistent security policies across different cloud providers with varying implementations", "It's too easy", "Cost savings"],
                answer: "Managing consistent security policies across different cloud providers with varying implementations" 
            }
        ] 
    },
    { 
        id: 16, title: "Firewall Performance Tuning", difficulty: "Hard", duration: "24 min", rating: 4.6, topics: 8, icon: Server, color: "bg-fuchsia-500", 
        description: "Optimize firewall performance for high-traffic networks.", 
        content: [{ type: "intro", text: "Proper tuning ensures firewalls don't become network bottlenecks." }], 
        objectives: ["Identify performance issues", "Optimize firewall rules"], 
        quiz: [
            { 
                question: "What can cause firewall performance degradation?", 
                options: ["Good configuration", "Too many rules, inefficient rule ordering, excessive logging, or inadequate hardware resources", "Having too few rules", "Regular updates"],
                answer: "Too many rules, inefficient rule ordering, excessive logging, or inadequate hardware resources" 
            },
            { 
                question: "How can rule optimization improve firewall performance?", 
                options: ["It can't", "By placing most frequently matched rules at the top and removing redundant or unused rules", "By adding more rules", "By disabling the firewall"],
                answer: "By placing most frequently matched rules at the top and removing redundant or unused rules" 
            }
        ] 
    },
    { 
        id: 17, title: "Next-Gen Firewall Features", difficulty: "Hard", duration: "26 min", rating: 4.9, topics: 9, icon: Shield, color: "bg-sky-500", 
        description: "Explore advanced NGFW capabilities.", 
        content: [{ type: "intro", text: "NGFWs combine traditional firewall functions with advanced features." }], 
        objectives: ["Understand NGFW features", "Deploy NGFW solutions"], 
        quiz: [
            { 
                question: "What features distinguish NGFWs from traditional firewalls?", 
                options: ["Nothing different", "Application awareness, integrated IPS, SSL inspection, and advanced threat protection", "Lower cost", "Simpler configuration"],
                answer: "Application awareness, integrated IPS, SSL inspection, and advanced threat protection" 
            },
            { 
                question: "What is application awareness in NGFWs?", 
                options: ["Knowing app names", "The ability to identify and control applications regardless of port or protocol", "Blocking all apps", "App store integration"],
                answer: "The ability to identify and control applications regardless of port or protocol" 
            },
            { 
                question: "Why is SSL/TLS inspection important in NGFWs?", 
                options: ["It's not important", "To detect threats hidden in encrypted traffic that would otherwise bypass security controls", "To slow down traffic", "To break encryption"],
                answer: "To detect threats hidden in encrypted traffic that would otherwise bypass security controls" 
            }
        ] 
    },
    { 
        id: 18, title: "Firewall Troubleshooting", difficulty: "Intermediate", duration: "19 min", rating: 4.7, topics: 6, icon: AlertTriangle, color: "bg-orange-600", 
        description: "Diagnose and resolve common firewall issues.", 
        content: [{ type: "intro", text: "Effective troubleshooting minimizes downtime and security risks." }], 
        objectives: ["Diagnose connectivity issues", "Resolve rule conflicts"], 
        quiz: [
            { 
                question: "What is a common cause of connectivity issues with firewalls?", 
                options: ["Too much bandwidth", "Incorrectly configured rules that block legitimate traffic", "Fast internet", "Good configuration"],
                answer: "Incorrectly configured rules that block legitimate traffic" 
            },
            { 
                question: "How can you identify rule conflicts?", 
                options: ["Guessing", "Review rules in order and test with packet tracing tools to see which rule is matching", "Ignore them", "Delete all rules"],
                answer: "Review rules in order and test with packet tracing tools to see which rule is matching" 
            }
        ] 
    },
    { 
        id: 19, title: "Security Policies Best Practices", difficulty: "Beginner", duration: "11 min", rating: 4.6, topics: 4, icon: CheckCircle, color: "bg-green-600", 
        description: "Develop effective security policies for your organization.", 
        content: [{ type: "intro", text: "Strong security policies are the foundation of network security." }], 
        objectives: ["Create security policies", "Implement policy enforcement"], 
        quiz: [
            { 
                question: "What should a good security policy include?", 
                options: ["Just passwords", "Clear rules for access control, acceptable use, incident response, and compliance requirements", "Only email rules", "Nothing specific"],
                answer: "Clear rules for access control, acceptable use, incident response, and compliance requirements" 
            },
            { 
                question: "Why is regular policy review important?", 
                options: ["It's not important", "To ensure policies remain effective against evolving threats and align with business needs", "For paperwork only", "To waste time"],
                answer: "To ensure policies remain effective against evolving threats and align with business needs" 
            },
            { 
                question: "What is the principle of 'default deny'?", 
                options: ["Allow everything by default", "Block all traffic by default and only allow specifically authorized connections", "Deny all users access", "Deny only external traffic"],
                answer: "Block all traffic by default and only allow specifically authorized connections" 
            }
        ] 
    },
    { 
        id: 20, title: "Firewall Compliance & Auditing", difficulty: "Hard", duration: "27 min", rating: 4.8, topics: 8, icon: Lock, color: "bg-blue-600", 
        description: "Ensure firewall configurations meet compliance requirements.", 
        content: [{ type: "intro", text: "Compliance requires regular auditing and documentation." }], 
        objectives: ["Conduct firewall audits", "Maintain compliance"], 
        quiz: [
            { 
                question: "What is the purpose of firewall compliance auditing?", 
                options: ["To waste time", "To ensure configurations meet regulatory requirements and security standards", "To find problems", "To increase costs"],
                answer: "To ensure configurations meet regulatory requirements and security standards" 
            },
            { 
                question: "What common compliance frameworks require firewall audits?", 
                options: ["None", "PCI DSS, HIPAA, SOX, and ISO 27001", "Only internal policies", "Social media guidelines"],
                answer: "PCI DSS, HIPAA, SOX, and ISO 27001" 
            }
        ] 
    }
];