declare namespace Definitions {
    export interface ASINIdentifier {
        /**
         * A marketplace identifier.
         */
        MarketplaceId: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN: string;
    }
    /**
     * Reasons why a given ASIN is not recommended for shipment to Amazon's fulfillment network.
     */
    export interface ASINInboundGuidance {
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN: string;
        InboundGuidance: /* Specific inbound guidance for an item. */ InboundGuidance;
        /**
         * A list of reasons for the current inbound guidance for this item.
         */
        GuidanceReasonList?: /* A list of inbound guidance reason information. */ GuidanceReasonList;
    }
    /**
     * A list of ASINs and their associated inbound guidance.
     */
    export type ASINInboundGuidanceList = /* Reasons why a given ASIN is not recommended for shipment to Amazon's fulfillment network. */ ASINInboundGuidance[];
    /**
     * Item preparation instructions to help with item sourcing decisions.
     */
    export interface ASINPrepInstructions {
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN?: string;
        BarcodeInstruction?: /* Labeling requirements for the item. For more information about FBA labeling requirements, see the Seller Central Help for your marketplace. */ BarcodeInstruction;
        PrepGuidance?: /* Item preparation instructions. */ PrepGuidance;
        PrepInstructionList?: /* A list of preparation instructions to help with item sourcing decisions. */ PrepInstructionList;
    }
    /**
     * A list of item preparation instructions.
     */
    export type ASINPrepInstructionsList = /* Item preparation instructions to help with item sourcing decisions. */ ASINPrepInstructions[];
    /**
     * The specific rate purchased for the shipment, or null if unpurchased.
     */
    export interface AcceptedRate {
        /**
         * The total charge that will be billed for the rate.
         */
        totalCharge?: /* A currency type and amount. */ Currency;
        /**
         * The weight that was used to calculate the totalCharge.
         */
        billedWeight?: /* The weight of the package. */ Weight;
        serviceType?: /* The type of shipping service that will be used for the service offering. */ ServiceType;
        promise?: /* The promised delivery time and pickup time. */ ShippingPromiseSet;
    }
    /**
     * The account related data.
     */
    export interface Account {
        accountId: /* This is the Amazon Shipping account id generated during the Amazon Shipping onboarding process. */ AccountId;
    }
    /**
     * This is the Amazon Shipping account id generated during the Amazon Shipping onboarding process.
     */
    export type AccountId = string;
    /**
     * Input for add appointment operation.
     */
    export interface AddAppointmentRequest {
        /**
         * Input appointment time details.
         */
        appointmentTime: /* The input appointment time details. */ AppointmentTimeInput;
    }
    /**
     * Maps the additional seller input to the definition. The key to the map is the field name.
     */
    export interface AdditionalInputs {
        /**
         * The field name.
         */
        AdditionalInputFieldName?: string;
        SellerInputDefinition?: /* Specifies characteristics that apply to a seller input. */ SellerInputDefinition;
    }
    /**
     * A list of additional inputs.
     */
    export type AdditionalInputsList = /* Maps the additional seller input to the definition. The key to the map is the field name. */ AdditionalInputs[];
    /**
     * Additional location information.
     */
    export type AdditionalLocationInfo = "AS_INSTRUCTED" | "CARPORT" | "CUSTOMER_PICKUP" | "DECK" | "DOOR_PERSON" | "FRONT_DESK" | "FRONT_DOOR" | "GARAGE" | "GUARD" | "MAIL_ROOM" | "MAIL_SLOT" | "MAILBOX" | "MC_BOY" | "MC_GIRL" | "MC_MAN" | "MC_WOMAN" | "NEIGHBOR" | "OFFICE" | "OUTBUILDING" | "PATIO" | "PORCH" | "REAR_DOOR" | "RECEPTIONIST" | "RECEIVER" | "SECURE_LOCATION" | "SIDE_DOOR";
    /**
     * Additional information required to purchase shipping.
     */
    export interface AdditionalSellerInput {
        /**
         * The data type of the additional information.
         */
        DataType?: string;
        /**
         * The value when the data type is string.
         */
        ValueAsString?: string;
        /**
         * The value when the data type is boolean.
         */
        ValueAsBoolean?: boolean;
        /**
         * The value when the data type is integer.
         */
        ValueAsInteger?: number;
        /**
         * The value when the data type is a date-time formatted string.
         */
        ValueAsTimestamp?: Timestamp /* date-time */;
        ValueAsAddress?: Address;
        ValueAsWeight?: /* The weight of the package. */ Weight;
        ValueAsDimension?: /* The length. */ Length;
        ValueAsCurrency?: /* Currency type and amount. */ CurrencyAmount;
    }
    /**
     * An additional set of seller inputs required to purchase shipping.
     */
    export interface AdditionalSellerInputs {
        /**
         * The name of the additional input field.
         */
        AdditionalInputFieldName: string;
        AdditionalSellerInput: /* Additional information required to purchase shipping. */ AdditionalSellerInput;
    }
    /**
     * A list of additional seller input pairs required to purchase shipping.
     */
    export type AdditionalSellerInputsList = /* An additional set of seller inputs required to purchase shipping. */ AdditionalSellerInputs[];
    export interface Address {
        /**
         * Name of the individual or business.
         */
        Name: string;
        /**
         * The street address information.
         */
        AddressLine1: string;
        /**
         * Additional street address information, if required.
         */
        AddressLine2?: string;
        /**
         * The district or county.
         */
        DistrictOrCounty?: string;
        /**
         * The city.
         */
        City: string;
        /**
         * The state or province code.
         *
         * If state or province codes are used in your marketplace, it is recommended that you include one with your request. This helps Amazon to select the most appropriate Amazon fulfillment center for your inbound shipment plan.
         */
        StateOrProvinceCode: string;
        /**
         * The country code in two-character ISO 3166-1 alpha-2 format.
         */
        CountryCode: string;
        /**
         * The postal code.
         *
         * If postal codes are used in your marketplace, we recommended that you include one with your request. This helps Amazon select the most appropriate Amazon fulfillment center for the inbound shipment plan.
         */
        PostalCode: string;
    }
    /**
     * The street address information.
     */
    export type AddressLine1 = string;
    /**
     * Additional street address information.
     */
    export type AddressLine2 = string;
    /**
     * Additional street address information.
     */
    export type AddressLine3 = string;
    /**
     * The name of the addressee, or business name.
     */
    export type AddressName = string;
    /**
     * An adjustment to the seller's account.
     */
    export interface AdjustmentEvent {
        /**
         * The type of adjustment.
         *
         * Possible values:
         *
         * * FBAInventoryReimbursement - An FBA inventory reimbursement to a seller's account. This occurs if a seller's inventory is damaged.
         *
         * * ReserveEvent - A reserve event that is generated at the time of a settlement period closing. This occurs when some money from a seller's account is held back.
         *
         * * PostageBilling - The amount paid by a seller for shipping labels.
         *
         * * PostageRefund - The reimbursement of shipping labels purchased for orders that were canceled or refunded.
         *
         * * LostOrDamagedReimbursement - An Amazon Easy Ship reimbursement to a seller's account for a package that we lost or damaged.
         *
         * * CanceledButPickedUpReimbursement - An Amazon Easy Ship reimbursement to a seller's account. This occurs when a package is picked up and the order is subsequently canceled. This value is used only in the India marketplace.
         *
         * * ReimbursementClawback - An Amazon Easy Ship reimbursement clawback from a seller's account. This occurs when a prior reimbursement is reversed. This value is used only in the India marketplace.
         *
         * * SellerRewards - An award credited to a seller's account for their participation in an offer in the Seller Rewards program. Applies only to the India marketplace.
         */
        AdjustmentType?: string;
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * The amount adjusted as part of this event.
         */
        AdjustmentAmount?: /* A currency type and amount. */ Currency;
        /**
         * A list of information about adjustments to an account.
         */
        AdjustmentItemList?: /* A list of information about items in an adjustment to the seller's account. */ AdjustmentItemList;
    }
    /**
     * A list of adjustment event information for the seller's account.
     */
    export type AdjustmentEventList = /* An adjustment to the seller's account. */ AdjustmentEvent[];
    /**
     * An item in an adjustment to the seller's account.
     */
    export interface AdjustmentItem {
        /**
         * Represents the number of units in the seller's inventory when the AdustmentType is FBAInventoryReimbursement.
         */
        Quantity?: string;
        /**
         * The per unit value of the item.
         */
        PerUnitAmount?: /* A currency type and amount. */ Currency;
        /**
         * The total value of the item.
         */
        TotalAmount?: /* A currency type and amount. */ Currency;
        /**
         * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
         */
        SellerSKU?: string;
        /**
         * A unique identifier assigned to products stored in and fulfilled from a fulfillment center.
         */
        FnSKU?: string;
        /**
         * A short description of the item.
         */
        ProductDescription?: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN?: string;
    }
    /**
     * A list of information about items in an adjustment to the seller's account.
     */
    export type AdjustmentItemList = /* An item in an adjustment to the seller's account. */ AdjustmentItem[];
    /**
     * An expense related to an affordability promotion.
     */
    export interface AffordabilityExpenseEvent {
        /**
         * An Amazon-defined identifier for an order.
         */
        AmazonOrderId?: string;
        /**
         * The date and time when the financial event was created.
         */
        PostedDate?: Date /* date-time */;
        /**
         * An encrypted, Amazon-defined marketplace identifier.
         */
        MarketplaceId?: string;
        /**
         * Indicates the type of transaction.
         *
         * Possible values:
         *
         * * Charge - For an affordability promotion expense.
         *
         * * Refund - For an affordability promotion expense reversal.
         */
        TransactionType?: string;
        /**
         * The amount charged for clicks incurred under the Sponsored Products program.
         */
        BaseExpense?: /* A currency type and amount. */ Currency;
        /**
         * Central Goods and Service Tax, charged and collected by the central government.
         */
        TaxTypeCGST: /* A currency type and amount. */ Currency;
        /**
         * State Goods and Service Tax, charged and collected by the state government.
         */
        TaxTypeSGST: /* A currency type and amount. */ Currency;
        /**
         * Integrated Goods and Service Tax, charged and collected by the central government.
         */
        TaxTypeIGST: /* A currency type and amount. */ Currency;
        /**
         * The total amount charged to the seller. TotalExpense = BaseExpense + TaxTypeIGST + TaxTypeCGST + TaxTypeSGST.
         */
        TotalExpense?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of expense information related to an affordability promotion.
     */
    export type AffordabilityExpenseEventList = /* An expense related to an affordability promotion. */ AffordabilityExpenseEvent[];
    /**
     * An Amazon-defined order identifier, in 3-7-7 format. <br>**Pattern** : `[0-9A-Z]{3}-[0-9]{7}-[0-9]{7}`.
     */
    export type AmazonOrderId = string;
    /**
     * The fees for Amazon to prep goods for shipment.
     */
    export interface AmazonPrepFeesDetails {
        PrepInstruction?: /* Preparation instructions for shipping an item to Amazon's fulfillment network. For more information about preparing items for shipment to Amazon's fulfillment network, see the Seller Central Help for your marketplace. */ PrepInstruction;
        /**
         * The fee for Amazon to prepare 1 unit.
         */
        FeePerUnit?: /* The monetary value. */ Amount;
    }
    /**
     * A list of preparation instructions and fees for Amazon to prep goods for shipment.
     */
    export type AmazonPrepFeesDetailsList = /* The fees for Amazon to prep goods for shipment. */ AmazonPrepFeesDetails[];
    /**
     * The monetary value.
     */
    export interface Amount {
        CurrencyCode: /* The currency code. */ CurrencyCode;
        /**
         * The amount.
         */
        Value: BigDecimalType /* double */;
    }
    /**
     * The details of an appointment.
     */
    export interface Appointment {
        /**
         * The appointment identifier.
         */
        appointmentId?: /* The appointment identifier. */ AppointmentId;
        /**
         * The status of the appointment.
         */
        appointmentStatus?: "ACTIVE" | "CANCELLED" | "COMPLETED";
        /**
         * The time of the appointment window.
         */
        appointmentTime?: /* The time of the appointment window. */ AppointmentTime;
        /**
         * A list of technicians assigned to the service job.
         */
        assignedTechnicians?: /* A technician who is assigned to perform the service job in part or in full. */ Technician[];
        /**
         * The identifier of a rescheduled appointment.
         */
        rescheduledAppointmentId?: /* The appointment identifier. */ AppointmentId;
        /**
         * Proof of Appointment (POA) details.
         */
        poa?: /* Proof of Appointment (POA) details. */ Poa;
    }
    /**
     * The appointment identifier.
     */
    export type AppointmentId = string;
    /**
     * The time of the appointment window.
     */
    export interface AppointmentTime {
        /**
         * The date and time of the start of the appointment window, in ISO 8601 format.
         */
        startTime: string; // date-time
        /**
         * The duration of the appointment window, in minutes.
         */
        durationInMinutes: number;
    }
    /**
     * The input appointment time details.
     */
    export interface AppointmentTimeInput {
        /**
         * The date, time in UTC for the start time of an appointment in ISO 8601 format.
         */
        startTime: string; // date-time
        /**
         * The duration of an appointment in minutes.
         */
        durationInMinutes?: number;
    }
    /**
     * Information about an item associated with the service job.
     */
    export interface AssociatedItem {
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        asin?: string;
        /**
         * The title of the item.
         */
        title?: string;
        /**
         * The total number of items included in the order.
         */
        quantity?: number;
        /**
         * The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
         */
        orderId?: /* The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format. */ OrderId;
        /**
         * The status of the item.
         */
        itemStatus?: "ACTIVE" | "CANCELLED" | "SHIPPED" | "DELIVERED";
        /**
         * The brand name of the item.
         */
        brandName?: string;
        /**
         * Delivery information for the item.
         */
        itemDelivery?: /* Delivery information for the item. */ ItemDelivery;
    }
    /**
     * Represents a file uploaded to a destination that was created by the createUploadDestination operation of the Uploads API.
     */
    export interface Attachment {
        /**
         * The identifier of the upload destination. Get this value by calling the createUploadDestination operation of the Uploads API.
         */
        uploadDestinationId: string;
        /**
         * The name of the file, including the extension. This is the file name that will appear in the message. This does not need to match the file name of the file that you uploaded.
         */
        fileName: string;
    }
    /**
     * A list of attributes for the item.
     */
    export type AttributeSetList = /* The attributes of the item. */ AttributeSetListType[];
    /**
     * The attributes of the item.
     */
    export interface AttributeSetListType {
        /**
         * The actor attributes of the item.
         */
        Actor?: string[];
        /**
         * The artist attributes of the item.
         */
        Artist?: string[];
        /**
         * The aspect ratio attribute of the item.
         */
        AspectRatio?: string;
        /**
         * The audience rating attribute of the item.
         */
        AudienceRating?: string;
        /**
         * The author attributes of the item.
         */
        Author?: string[];
        /**
         * The back finding attribute of the item.
         */
        BackFinding?: string;
        /**
         * The band material type attribute of the item.
         */
        BandMaterialType?: string;
        /**
         * The binding attribute of the item.
         */
        Binding?: string;
        /**
         * The Bluray region attribute of the item.
         */
        BlurayRegion?: string;
        /**
         * The brand attribute of the item.
         */
        Brand?: string;
        /**
         * The CERO age rating attribute of the item.
         */
        CeroAgeRating?: string;
        /**
         * The chain type attribute of the item.
         */
        ChainType?: string;
        /**
         * The clasp type attribute of the item.
         */
        ClaspType?: string;
        /**
         * The color attribute of the item.
         */
        Color?: string;
        /**
         * The CPU manufacturer attribute of the item.
         */
        CpuManufacturer?: string;
        /**
         * The CPU speed attribute of the item.
         */
        CpuSpeed?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The CPU type attribute of the item.
         */
        CpuType?: string;
        /**
         * The creator attributes of the item.
         */
        Creator?: /* The creator type attribute of an item. */ CreatorType[];
        /**
         * The department attribute of the item.
         */
        Department?: string;
        /**
         * The director attributes of the item.
         */
        Director?: string[];
        /**
         * The display size attribute of the item.
         */
        DisplaySize?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The edition attribute of the item.
         */
        Edition?: string;
        /**
         * The episode sequence attribute of the item.
         */
        EpisodeSequence?: string;
        /**
         * The ESRB age rating attribute of the item.
         */
        EsrbAgeRating?: string;
        /**
         * The feature attributes of the item
         */
        Feature?: string[];
        /**
         * The flavor attribute of the item.
         */
        Flavor?: string;
        /**
         * The format attributes of the item.
         */
        Format?: string[];
        /**
         * The gem type attributes of the item.
         */
        GemType?: string[];
        /**
         * The genre attribute of the item.
         */
        Genre?: string;
        /**
         * The golf club flex attribute of the item.
         */
        GolfClubFlex?: string;
        /**
         * The golf club loft attribute of the item.
         */
        GolfClubLoft?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The hand orientation attribute of the item.
         */
        HandOrientation?: string;
        /**
         * The hard disk interface attribute of the item.
         */
        HardDiskInterface?: string;
        /**
         * The hard disk size attribute of the item.
         */
        HardDiskSize?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The hardware platform attribute of the item.
         */
        HardwarePlatform?: string;
        /**
         * The hazardous material type attribute of the item.
         */
        HazardousMaterialType?: string;
        /**
         * The item dimensions attribute of the item.
         */
        ItemDimensions?: /* The dimension type attribute of an item. */ DimensionType;
        /**
         * The adult product attribute of the item.
         */
        IsAdultProduct?: boolean;
        /**
         * The autographed attribute of the item.
         */
        IsAutographed?: boolean;
        /**
         * The is eligible for trade in attribute of the item.
         */
        IsEligibleForTradeIn?: boolean;
        /**
         * The is memorabilia attribute of the item.
         */
        IsMemorabilia?: boolean;
        /**
         * The issues per year attribute of the item.
         */
        IssuesPerYear?: string;
        /**
         * The item part number attribute of the item.
         */
        ItemPartNumber?: string;
        /**
         * The label attribute of the item.
         */
        Label?: string;
        /**
         * The languages attribute of the item.
         */
        Languages?: /* The language type attribute of an item. */ LanguageType[];
        /**
         * The legal disclaimer attribute of the item.
         */
        LegalDisclaimer?: string;
        /**
         * The list price attribute of the item.
         */
        ListPrice?: /* The price attribute of the item. */ Price;
        /**
         * The manufacturer attribute of the item.
         */
        Manufacturer?: string;
        /**
         * The manufacturer maximum age attribute of the item.
         */
        ManufacturerMaximumAge?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The manufacturer minimum age attribute of the item.
         */
        ManufacturerMinimumAge?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The manufacturer parts warranty description attribute of the item.
         */
        ManufacturerPartsWarrantyDescription?: string;
        /**
         * The material type attributes of the item.
         */
        MaterialType?: string[];
        /**
         * The maximum resolution attribute of the item.
         */
        MaximumResolution?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The media type attributes of the item.
         */
        MediaType?: string[];
        /**
         * The metal stamp attribute of the item.
         */
        MetalStamp?: string;
        /**
         * The metal type attribute of the item.
         */
        MetalType?: string;
        /**
         * The model attribute of the item.
         */
        Model?: string;
        /**
         * The number of discs attribute of the item.
         */
        NumberOfDiscs?: number;
        /**
         * The number of issues attribute of the item.
         */
        NumberOfIssues?: number;
        /**
         * The number of items attribute of the item.
         */
        NumberOfItems?: number;
        /**
         * The number of pages attribute of the item.
         */
        NumberOfPages?: number;
        /**
         * The number of tracks attribute of the item.
         */
        NumberOfTracks?: number;
        /**
         * The operating system attributes of the item.
         */
        OperatingSystem?: string[];
        /**
         * The optical zoom attribute of the item.
         */
        OpticalZoom?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The package dimensions attribute of the item.
         */
        PackageDimensions?: /* The dimension type attribute of an item. */ DimensionType;
        /**
         * The package quantity attribute of the item.
         */
        PackageQuantity?: number;
        /**
         * The part number attribute of the item.
         */
        PartNumber?: string;
        /**
         * The PEGI rating attribute of the item.
         */
        PegiRating?: string;
        /**
         * The platform attributes of the item.
         */
        Platform?: string[];
        /**
         * The processor count attribute of the item.
         */
        ProcessorCount?: number;
        /**
         * The product group attribute of the item.
         */
        ProductGroup?: string;
        /**
         * The product type name attribute of the item.
         */
        ProductTypeName?: string;
        /**
         * The product type subcategory attribute of the item.
         */
        ProductTypeSubcategory?: string;
        /**
         * The publication date attribute of the item.
         */
        PublicationDate?: string;
        /**
         * The publisher attribute of the item.
         */
        Publisher?: string;
        /**
         * The region code attribute of the item.
         */
        RegionCode?: string;
        /**
         * The release date attribute of the item.
         */
        ReleaseDate?: string;
        /**
         * The ring size attribute of the item.
         */
        RingSize?: string;
        /**
         * The running time attribute of the item.
         */
        RunningTime?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The shaft material attribute of the item.
         */
        ShaftMaterial?: string;
        /**
         * The scent attribute of the item.
         */
        Scent?: string;
        /**
         * The season sequence attribute of the item.
         */
        SeasonSequence?: string;
        /**
         * The Seikodo product code attribute of the item.
         */
        SeikodoProductCode?: string;
        /**
         * The size attribute of the item.
         */
        Size?: string;
        /**
         * The size per pearl attribute of the item.
         */
        SizePerPearl?: string;
        /**
         * The small image attribute of the item.
         */
        SmallImage?: /* The image attribute of the item. */ Image;
        /**
         * The studio attribute of the item.
         */
        Studio?: string;
        /**
         * The subscription length attribute of the item.
         */
        SubscriptionLength?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The system memory size attribute of the item.
         */
        SystemMemorySize?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The system memory type attribute of the item.
         */
        SystemMemoryType?: string;
        /**
         * The theatrical release date attribute of the item.
         */
        TheatricalReleaseDate?: string;
        /**
         * The title attribute of the item.
         */
        Title?: string;
        /**
         * The total diamond weight attribute of the item.
         */
        TotalDiamondWeight?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The total gem weight attribute of the item.
         */
        TotalGemWeight?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The warranty attribute of the item.
         */
        Warranty?: string;
        /**
         * The WEEE tax value attribute of the item.
         */
        WeeeTaxValue?: /* The price attribute of the item. */ Price;
    }
    /**
     * A Login with Amazon (LWA) authorization code.
     */
    export interface AuthorizationCode {
        /**
         * A Login with Amazon (LWA) authorization code that can be exchanged for a refresh token and access token that authorize you to make calls to a Selling Partner API.
         */
        authorizationCode?: string;
    }
    /**
     * Indicates whether the carrier will pick up the package, and what fee is charged, if any.
     */
    export interface AvailableCarrierWillPickUpOption {
        CarrierWillPickUpOption: /* Carrier will pick up option. */ CarrierWillPickUpOption;
        /**
         * The fee charged.
         */
        Charge: /* Currency type and amount. */ CurrencyAmount;
    }
    /**
     * List of available carrier pickup options.
     */
    export type AvailableCarrierWillPickUpOptionsList = /* Indicates whether the carrier will pick up the package, and what fee is charged, if any. */ AvailableCarrierWillPickUpOption[];
    /**
     * The available delivery confirmation options, and the fee charged, if any.
     */
    export interface AvailableDeliveryExperienceOption {
        DeliveryExperienceOption: /* The delivery confirmation level. */ DeliveryExperienceOption;
        Charge: /* Currency type and amount. */ CurrencyAmount;
    }
    /**
     * List of available delivery experience options.
     */
    export type AvailableDeliveryExperienceOptionsList = /* The available delivery confirmation options, and the fee charged, if any. */ AvailableDeliveryExperienceOption[];
    export type AvailableFormatOptionsForLabel = /* The available label formats. */ AvailableFormatOptionsForLabelList;
    /**
     * The available label formats.
     */
    export type AvailableFormatOptionsForLabelList = /* The label format details and whether to include a packing slip. */ LabelFormatOption[];
    /**
     * The available shipping service options.
     */
    export interface AvailableShippingServiceOptions {
        AvailableCarrierWillPickUpOptions: /* List of available carrier pickup options. */ AvailableCarrierWillPickUpOptionsList;
        AvailableDeliveryExperienceOptions: /* List of available delivery experience options. */ AvailableDeliveryExperienceOptionsList;
    }
    /**
     * Labeling requirements for the item. For more information about FBA labeling requirements, see the Seller Central Help for your marketplace.
     */
    export type BarcodeInstruction = "RequiresFNSKULabel" | "CanUseOriginalBarcode" | "MustProvideSellerSKU";
    export type BigDecimal = number;
    export type BigDecimalType = number; // double
    export interface BillOfLadingDownloadURL {
        /**
         * URL to download the bill of lading for the package. Note: The URL will only be valid for 15 seconds
         */
        DownloadURL?: string;
    }
    /**
     * The manual processing fee per unit and total fee for a shipment.
     */
    export interface BoxContentsFeeDetails {
        /**
         * The number of units to ship.
         */
        TotalUnits?: /* The item quantity. */ Quantity /* int32 */;
        /**
         * The manual processing fee per unit.
         */
        FeePerUnit?: /* The monetary value. */ Amount;
        /**
         * The total manual processing fee for the shipment.
         */
        TotalFee?: /* The monetary value. */ Amount;
    }
    /**
     * Where the seller provided box contents information for a shipment.
     */
    export type BoxContentsSource = "NONE" | "FEED" | "2D_BARCODE" | "INTERACTIVE";
    export type BuyBoxEligibleOffers = /* The total number of offers for the specified condition and fulfillment channel. */ OfferCountType[];
    export interface BuyBoxPriceType {
        /**
         * Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
         */
        condition: string;
        /**
         * The value calculated by adding ListingPrice + Shipping - Points.
         */
        LandedPrice: MoneyType;
        /**
         * The price of the item.
         */
        ListingPrice: MoneyType;
        /**
         * The shipping cost.
         */
        Shipping: MoneyType;
        /**
         * The number of Amazon Points offered with the purchase of an item.
         */
        Points?: Points;
    }
    export type BuyBoxPrices = BuyBoxPriceType[];
    /**
     * Information about the buyer.
     */
    export interface Buyer {
        /**
         * The identifier of the buyer.
         */
        buyerId?: string; // ^[A-Z0-9]*$
        /**
         * The name of the buyer.
         */
        name?: string;
        /**
         * The phone number of the buyer.
         */
        phone?: string;
        /**
         * When true, the service is for an Amazon Prime buyer.
         */
        isPrimeMember?: boolean;
    }
    /**
     * Buyer information for custom orders from the Amazon Custom program.
     */
    export interface BuyerCustomizedInfoDetail {
        /**
         * The location of a zip file containing Amazon Custom data.
         */
        CustomizedURL?: string;
    }
    /**
     * Tax information about the buyer.
     */
    export interface BuyerTaxInfo {
        /**
         * The legal name of the company.
         */
        CompanyLegalName?: string;
        /**
         * The country or region imposing the tax.
         */
        TaxingRegion?: string;
        /**
         * A list of tax classifications that apply to the order.
         */
        TaxClassifications?: /* The tax classification for the order. */ TaxClassification[];
    }
    /**
     * The COD (Cash On Delivery) charges that you associate with a COD fulfillment order.
     */
    export interface CODSettings {
        /**
         * When true, this fulfillment order requires a COD (Cash On Delivery) payment.
         */
        isCodRequired: boolean;
        /**
         * The amount of the COD charge to be collected from the recipient for a COD order.
         */
        codCharge?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The amount of the tax on the COD charge to be collected from the recipient for a COD order.
         */
        codChargeTax?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The amount of the tax on the COD charge to be collected from the recipient for a COD order.
         */
        shippingCharge?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The amount of the tax on the shipping charge to be collected from the recipient for a COD order.
         */
        shippingChargeTax?: /* An amount of money, including units in the form of currency. */ Money;
    }
    /**
     * Response schema.
     */
    export interface CancelFeedResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the cancelFulfillmentOrder operation.
     */
    export interface CancelFulfillmentOrderResponse {
        /**
         * One or more unexpected errors occurred during the cancelFulfillmentOrder operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response for the cancelReport operation.
     */
    export interface CancelReportResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response for the cancelReportSchedule operation.
     */
    export interface CancelReportScheduleResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Response schema for CancelServiceJobByServiceJobId operation.
     */
    export interface CancelServiceJobByServiceJobIdResponse {
        /**
         * Encountered errors for the CancelServiceJobByServiceJobId operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Response schema.
     */
    export interface CancelShipmentResponse {
        /**
         * The payload for the cancelShipment operation.
         */
        payload?: /* The details of a shipment, including the shipment status. */ Shipment;
        /**
         * One or more unexpected errors occurred during the cancelShipment operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Carrier will pick up option.
     */
    export type CarrierWillPickUpOption = "CarrierWillPickUp" | "ShipperWillDropOff" | "NoPreference";
    export interface Categories {
        /**
         * The identifier for the product category (or browse node).
         */
        ProductCategoryId?: string;
        /**
         * The name of the product category (or browse node).
         */
        ProductCategoryName?: string;
        /**
         * The parent product category.
         */
        parent?: unknown;
    }
    /**
     * A charge on the seller's account.
     *
     * Possible values:
     *
     * * Principal - The selling price of the order item, equal to the selling price of the item multiplied by the quantity ordered.
     *
     * * Tax - The tax collected by the seller on the Principal.
     *
     * * MarketplaceFacilitatorTax-Principal - The tax withheld on the Principal.
     *
     * * MarketplaceFacilitatorTax-Shipping - The tax withheld on the ShippingCharge.
     *
     * * MarketplaceFacilitatorTax-Giftwrap - The tax withheld on the Giftwrap charge.
     *
     * * MarketplaceFacilitatorTax-Other - The tax withheld on other miscellaneous charges.
     *
     * * Discount - The promotional discount for an order item.
     *
     * * TaxDiscount - The tax amount deducted for promotional rebates.
     *
     * * CODItemCharge - The COD charge for an order item.
     *
     * * CODItemTaxCharge - The tax collected by the seller on a CODItemCharge.
     *
     * * CODOrderCharge - The COD charge for an order.
     *
     * * CODOrderTaxCharge - The tax collected by the seller on a CODOrderCharge.
     *
     * * CODShippingCharge - Shipping charges for a COD order.
     *
     * * CODShippingTaxCharge - The tax collected by the seller on a CODShippingCharge.
     *
     * * ShippingCharge - The shipping charge.
     *
     * * ShippingTax - The tax collected by the seller on a ShippingCharge.
     *
     * * Goodwill - The amount given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.
     *
     * * Giftwrap - The gift wrap charge.
     *
     * * GiftwrapTax - The tax collected by the seller on a Giftwrap charge.
     *
     * * RestockingFee - The charge applied to the buyer when returning a product in certain categories.
     *
     * * ReturnShipping - The amount given to the buyer to compensate for shipping the item back in the event we are at fault.
     *
     * * PointsFee - The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.
     *
     * * GenericDeduction - A generic bad debt deduction.
     *
     * * FreeReplacementReturnShipping - The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.
     *
     * * PaymentMethodFee - The fee collected for certain payment methods in certain marketplaces.
     *
     * * ExportCharge - The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.
     *
     * * SAFE-TReimbursement - The SAFE-T claim amount for the item.
     *
     * * TCS-CGST - Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).
     *
     * * TCS-SGST - Tax Collected at Source for State Goods and Services Tax (SGST).
     *
     * * TCS-IGST - Tax Collected at Source for Integrated Goods and Services Tax (IGST).
     *
     * * TCS-UTGST - Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
     */
    export interface ChargeComponent {
        /**
         * The type of charge.
         */
        ChargeType?: string;
        /**
         * The amount of the charge.
         */
        ChargeAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of charge information on the seller's account.
     */
    export type ChargeComponentList = /**
     * A charge on the seller's account.
     *
     * Possible values:
     *
     * * Principal - The selling price of the order item, equal to the selling price of the item multiplied by the quantity ordered.
     *
     * * Tax - The tax collected by the seller on the Principal.
     *
     * * MarketplaceFacilitatorTax-Principal - The tax withheld on the Principal.
     *
     * * MarketplaceFacilitatorTax-Shipping - The tax withheld on the ShippingCharge.
     *
     * * MarketplaceFacilitatorTax-Giftwrap - The tax withheld on the Giftwrap charge.
     *
     * * MarketplaceFacilitatorTax-Other - The tax withheld on other miscellaneous charges.
     *
     * * Discount - The promotional discount for an order item.
     *
     * * TaxDiscount - The tax amount deducted for promotional rebates.
     *
     * * CODItemCharge - The COD charge for an order item.
     *
     * * CODItemTaxCharge - The tax collected by the seller on a CODItemCharge.
     *
     * * CODOrderCharge - The COD charge for an order.
     *
     * * CODOrderTaxCharge - The tax collected by the seller on a CODOrderCharge.
     *
     * * CODShippingCharge - Shipping charges for a COD order.
     *
     * * CODShippingTaxCharge - The tax collected by the seller on a CODShippingCharge.
     *
     * * ShippingCharge - The shipping charge.
     *
     * * ShippingTax - The tax collected by the seller on a ShippingCharge.
     *
     * * Goodwill - The amount given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.
     *
     * * Giftwrap - The gift wrap charge.
     *
     * * GiftwrapTax - The tax collected by the seller on a Giftwrap charge.
     *
     * * RestockingFee - The charge applied to the buyer when returning a product in certain categories.
     *
     * * ReturnShipping - The amount given to the buyer to compensate for shipping the item back in the event we are at fault.
     *
     * * PointsFee - The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.
     *
     * * GenericDeduction - A generic bad debt deduction.
     *
     * * FreeReplacementReturnShipping - The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.
     *
     * * PaymentMethodFee - The fee collected for certain payment methods in certain marketplaces.
     *
     * * ExportCharge - The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.
     *
     * * SAFE-TReimbursement - The SAFE-T claim amount for the item.
     *
     * * TCS-CGST - Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).
     *
     * * TCS-SGST - Tax Collected at Source for State Goods and Services Tax (SGST).
     *
     * * TCS-IGST - Tax Collected at Source for Integrated Goods and Services Tax (IGST).
     *
     * * TCS-UTGST - Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
     */
    ChargeComponent[];
    /**
     * A payment instrument.
     */
    export interface ChargeInstrument {
        /**
         * A short description of the charge instrument.
         */
        Description?: string;
        /**
         * The account tail (trailing digits) of the charge instrument.
         */
        Tail?: string;
        /**
         * The amount charged to this charge instrument.
         */
        Amount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of payment instruments.
     */
    export type ChargeInstrumentList = /* A payment instrument. */ ChargeInstrument[];
    /**
     * The city.
     */
    export type City = string;
    /**
     * Client reference id.
     */
    export type ClientReferenceId = string;
    export interface CommonTransportResult {
        TransportResult?: /* The workflow status for a shipment with an Amazon-partnered carrier. */ TransportResult;
    }
    /**
     * A list of competitive pricing information.
     */
    export type CompetitivePriceList = CompetitivePriceType[];
    export interface CompetitivePriceType {
        /**
         * The pricing model for each price that is returned.
         *
         * Possible values:
         *
         * * 1 - New Buy Box Price.
         * * 2 - Used Buy Box Price.
         */
        CompetitivePriceId: string;
        /**
         * Pricing information for a given CompetitivePriceId value.
         */
        Price: PriceType;
        /**
         * Indicates the condition of the item whose pricing information is returned. Possible values are: New, Used, Collectible, Refurbished, or Club.
         */
        condition?: string;
        /**
         * Indicates the subcondition of the item whose pricing information is returned. Possible values are: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
         */
        subcondition?: string;
        /**
         *  Indicates whether or not the pricing information is for an offer listing that belongs to the requester. The requester is the seller associated with the SellerId that was submitted with the request. Possible values are: true and false.
         */
        belongsToRequester?: boolean;
    }
    /**
     * Competitive pricing information for the item.
     */
    export interface CompetitivePricingType {
        CompetitivePrices: /* A list of competitive pricing information. */ CompetitivePriceList;
        NumberOfOfferListings: /* The number of active offer listings for the item that was submitted. The listing count is returned by condition, one for each listing condition value that is returned. Possible listing condition values are: Any, New, Used, Collectible, Refurbished, or Club. */ NumberOfOfferListingsList;
        /**
         * The trade-in value of the item in the trade-in program.
         */
        TradeInValue?: MoneyType;
    }
    /**
     * Response schema for CompleteServiceJobByServiceJobId operation.
     */
    export interface CompleteServiceJobByServiceJobIdResponse {
        /**
         * Encountered errors for the CompleteServiceJobByServiceJobId operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The condition of the item.
     */
    export type Condition = "NewItem" | "NewWithWarranty" | "NewOEM" | "NewOpenBox" | "UsedLikeNew" | "UsedVeryGood" | "UsedGood" | "UsedAcceptable" | "UsedPoor" | "UsedRefurbished" | "CollectibleLikeNew" | "CollectibleVeryGood" | "CollectibleGood" | "CollectibleAcceptable" | "CollectiblePoor" | "RefurbishedWithWarranty" | "Refurbished" | "Club";
    /**
     * Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished, Club.
     */
    export type ConditionType = "New" | "Used" | "Collectible" | "Refurbished" | "Club";
    /**
     * The response schema for the confirmPreorder operation.
     */
    export interface ConfirmPreorderResponse {
        /**
         * The payload for the confirmPreorder operation.
         */
        payload?: ConfirmPreorderResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface ConfirmPreorderResult {
        /**
         * Date passed in with the NeedByDate parameter. The confirmed shipment must arrive at the Amazon fulfillment center by this date to avoid delivery promise breaks for pre-ordered items. In YYYY-MM-DD format.
         */
        ConfirmedNeedByDate?: DateStringType /* date */;
        /**
         * Date that determines which pre-order items in the shipment are eligible for pre-order. The pre-order Buy Box will appear for any pre-order item in the shipment with a release date on or after this date. In YYYY-MM-DD format.
         */
        ConfirmedFulfillableDate?: DateStringType /* date */;
    }
    /**
     * The response schema for the confirmTransport operation.
     */
    export interface ConfirmTransportResponse {
        /**
         * The payload for the confirmTransport operation.
         */
        payload?: CommonTransportResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * A validation constraint.
     */
    export interface Constraint {
        /**
         * A regular expression.
         */
        ValidationRegEx?: string;
        /**
         * A validation string.
         */
        ValidationString: string;
    }
    /**
     * List of constraints.
     */
    export type Constraints = /* A validation constraint. */ Constraint[];
    /**
     * Contact information for the person in the seller's organization who is responsible for a Less Than Truckload/Full Truckload (LTL/FTL) shipment.
     */
    export interface Contact {
        /**
         * The name of the contact person.
         */
        Name: string;
        /**
         * The phone number of the contact person.
         */
        Phone: string;
        /**
         * The email address of the contact person.
         */
        Email: string;
        /**
         * The fax number of the contact person.
         */
        Fax?: string;
    }
    /**
     * Container in the shipment.
     */
    export interface Container {
        /**
         * The type of physical container being used. (always 'PACKAGE')
         */
        containerType?: "PACKAGE";
        containerReferenceId: /* An identifier for the container. This must be unique within all the containers in the same shipment. */ ContainerReferenceId;
        /**
         * The total value of all items in the container.
         */
        value: /* A currency type and amount. */ Currency;
        /**
         * The length, width, height, and weight of the container.
         */
        dimensions: /* The dimension values and unit of measurement. */ Dimensions;
        /**
         * A list of the items in the container.
         */
        items: /* Item in the container. */ ContainerItem[];
        /**
         * The weight of the container.
         */
        weight: /* The weight of the package. */ Weight;
    }
    /**
     * Item in the container.
     */
    export interface ContainerItem {
        /**
         * The quantity of the items of this type in the container.
         */
        quantity: number;
        /**
         * The unit price of an item of this type (the total value of this item type in the container is unitPrice * quantity).
         */
        unitPrice: /* A currency type and amount. */ Currency;
        /**
         * The unit weight of an item of this type (the total weight of this item type in the container is unitWeight * quantity).
         */
        unitWeight: /* The weight of the package. */ Weight;
        /**
         * A descriptive title of the item.
         */
        title: string;
    }
    /**
     * A list of container.
     */
    export type ContainerList = /* Container in the shipment. */ Container[];
    /**
     * An identifier for the container. This must be unique within all the containers in the same shipment.
     */
    export type ContainerReferenceId = string;
    /**
     * Container specification for checking the service rate.
     */
    export interface ContainerSpecification {
        /**
         * The length, width, and height of the container.
         */
        dimensions: /* The dimension values and unit of measurement. */ Dimensions;
        /**
         * The weight of the container.
         */
        weight: /* The weight of the package. */ Weight;
    }
    /**
     * A list of container specifications.
     */
    export type ContainerSpecificationList = /* Container specification for checking the service rate. */ ContainerSpecification[];
    /**
     * The country code. A two-character country code, in ISO 3166-1 alpha-2 format.
     */
    export type CountryCode = string;
    /**
     * An event related to coupon payments.
     */
    export interface CouponPaymentEvent {
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * A coupon identifier.
         */
        CouponId?: string;
        /**
         * The description provided by the seller when they created the coupon.
         */
        SellerCouponDescription?: string;
        /**
         * The number of coupon clips or redemptions.
         */
        ClipOrRedemptionCount?: number; // int64
        /**
         * A payment event identifier.
         */
        PaymentEventId?: string;
        FeeComponent?: /* A fee associated with the event. */ FeeComponent;
        ChargeComponent?: /**
         * A charge on the seller's account.
         *
         * Possible values:
         *
         * * Principal - The selling price of the order item, equal to the selling price of the item multiplied by the quantity ordered.
         *
         * * Tax - The tax collected by the seller on the Principal.
         *
         * * MarketplaceFacilitatorTax-Principal - The tax withheld on the Principal.
         *
         * * MarketplaceFacilitatorTax-Shipping - The tax withheld on the ShippingCharge.
         *
         * * MarketplaceFacilitatorTax-Giftwrap - The tax withheld on the Giftwrap charge.
         *
         * * MarketplaceFacilitatorTax-Other - The tax withheld on other miscellaneous charges.
         *
         * * Discount - The promotional discount for an order item.
         *
         * * TaxDiscount - The tax amount deducted for promotional rebates.
         *
         * * CODItemCharge - The COD charge for an order item.
         *
         * * CODItemTaxCharge - The tax collected by the seller on a CODItemCharge.
         *
         * * CODOrderCharge - The COD charge for an order.
         *
         * * CODOrderTaxCharge - The tax collected by the seller on a CODOrderCharge.
         *
         * * CODShippingCharge - Shipping charges for a COD order.
         *
         * * CODShippingTaxCharge - The tax collected by the seller on a CODShippingCharge.
         *
         * * ShippingCharge - The shipping charge.
         *
         * * ShippingTax - The tax collected by the seller on a ShippingCharge.
         *
         * * Goodwill - The amount given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.
         *
         * * Giftwrap - The gift wrap charge.
         *
         * * GiftwrapTax - The tax collected by the seller on a Giftwrap charge.
         *
         * * RestockingFee - The charge applied to the buyer when returning a product in certain categories.
         *
         * * ReturnShipping - The amount given to the buyer to compensate for shipping the item back in the event we are at fault.
         *
         * * PointsFee - The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.
         *
         * * GenericDeduction - A generic bad debt deduction.
         *
         * * FreeReplacementReturnShipping - The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.
         *
         * * PaymentMethodFee - The fee collected for certain payment methods in certain marketplaces.
         *
         * * ExportCharge - The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.
         *
         * * SAFE-TReimbursement - The SAFE-T claim amount for the item.
         *
         * * TCS-CGST - Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).
         *
         * * TCS-SGST - Tax Collected at Source for State Goods and Services Tax (SGST).
         *
         * * TCS-IGST - Tax Collected at Source for Integrated Goods and Services Tax (IGST).
         *
         * * TCS-UTGST - Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
         */
        ChargeComponent;
        /**
         * The FeeComponent value plus the ChargeComponent value.
         */
        TotalAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of coupon payment event information.
     */
    export type CouponPaymentEventList = /* An event related to coupon payments. */ CouponPaymentEvent[];
    /**
     * The request schema for the createAmazonMotors operation.
     */
    export interface CreateAmazonMotorsRequest {
        /**
         * Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        attachments?: /* Represents a file uploaded to a destination that was created by the createUploadDestination operation of the Uploads API. */ Attachment[];
    }
    /**
     * The response schema for the createAmazonMotors operation.
     */
    export interface CreateAmazonMotorsResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The request schema for the confirmCustomizationDetails operation.
     */
    export interface CreateConfirmCustomizationDetailsRequest {
        /**
         * The text to be sent to the buyer. Only links related to customization details are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        text?: string;
        /**
         * Attachments to include in the message to the buyer.
         */
        attachments?: /* Represents a file uploaded to a destination that was created by the createUploadDestination operation of the Uploads API. */ Attachment[];
    }
    /**
     * The response schema for the confirmCustomizationDetails operation.
     */
    export interface CreateConfirmCustomizationDetailsResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The request schema for the createConfirmDeliveryDetails operation.
     */
    export interface CreateConfirmDeliveryDetailsRequest {
        /**
         * The text to be sent to the buyer. Only links related to order delivery are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        text?: string;
    }
    /**
     * The response schema for the createConfirmDeliveryDetails operation.
     */
    export interface CreateConfirmDeliveryDetailsResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The request schema for the createConfirmOrderDetails operation.
     */
    export interface CreateConfirmOrderDetailsRequest {
        /**
         * The text to be sent to the buyer. Only links related to order completion are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        text?: string;
    }
    /**
     * The response schema for the createConfirmOrderDetails operation.
     */
    export interface CreateConfirmOrderDetailsResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The request schema for the createConfirmServiceDetails operation.
     */
    export interface CreateConfirmServiceDetailsRequest {
        /**
         * The text to be sent to the buyer. Only links related to Home Service calls are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        text?: string;
    }
    /**
     * The response schema for the createConfirmServiceDetails operation.
     */
    export interface CreateConfirmServiceDetailsResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The request schema for the createDestination operation.
     */
    export interface CreateDestinationRequest {
        /**
         * The information required to create a destination resource. Applications should use one resource type (sqs or eventBridge) per destination.
         */
        resourceSpecification: /* The information required to create a destination resource. Applications should use one resource type (sqs or eventBridge) per destination. */ DestinationResourceSpecification;
        /**
         * A developer-defined name to help identify this destination.
         */
        name: string;
    }
    /**
     * The response schema for the createDestination operation.
     */
    export interface CreateDestinationResponse {
        /**
         * The payload for the createDestination operation.
         */
        payload?: /* Represents a destination created when you call the createDestination operation. */ Destination;
        /**
         * One or more unexpected errors occurred during the createDestination operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The request schema for the createDigitalAccessKey operation.
     */
    export interface CreateDigitalAccessKeyRequest {
        /**
         * The text to be sent to the buyer. Only links related to the digital access key are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        text?: string;
        /**
         * Attachments to include in the message to the buyer.
         */
        attachments?: /* Represents a file uploaded to a destination that was created by the createUploadDestination operation of the Uploads API. */ Attachment[];
    }
    /**
     * The response schema for the createDigitalAccessKey operation.
     */
    export interface CreateDigitalAccessKeyResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response for the createFeedDocument operation.
     */
    export interface CreateFeedDocumentResponse {
        payload?: /* Information required to encrypt and upload a feed document's contents. */ CreateFeedDocumentResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Information required to encrypt and upload a feed document's contents.
     */
    export interface CreateFeedDocumentResult {
        /**
         * The identifier of the feed document.
         */
        feedDocumentId: string;
        /**
         * The presigned URL for uploading the feed contents. This URL expires after 5 minutes.
         */
        url: string;
        encryptionDetails: /* Encryption details for required client-side encryption and decryption of document contents. */ FeedDocumentEncryptionDetails;
    }
    export interface CreateFeedDocumentSpecification {
        /**
         * The content type of the feed.
         */
        contentType: string;
    }
    /**
     * Response schema.
     */
    export interface CreateFeedResponse {
        payload?: CreateFeedResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface CreateFeedResult {
        /**
         * The identifier for the feed. This identifier is unique only in combination with a seller ID.
         */
        feedId: string;
    }
    export interface CreateFeedSpecification {
        /**
         * The feed type.
         */
        feedType: string;
        /**
         * A list of identifiers for marketplaces that you want the feed to be applied to.
         */
        marketplaceIds: string[];
        /**
         * The document identifier returned by the createFeedDocument operation. Encrypt and upload the feed document contents before calling the createFeed operation.
         */
        inputFeedDocumentId: string;
        feedOptions?: /* Additional options to control the feed. These vary by feed type. */ FeedOptions;
    }
    /**
     * Item information for creating a fulfillment order.
     */
    export interface CreateFulfillmentOrderItem {
        /**
         * The seller SKU of the item.
         */
        sellerSku: string;
        /**
         * A fulfillment order item identifier that the seller creates to track fulfillment order items. Used to disambiguate multiple fulfillment items that have the same SellerSKU. For example, the seller might assign different SellerFulfillmentOrderItemId values to two items in a fulfillment order that share the same SellerSKU but have different GiftMessage values.
         */
        sellerFulfillmentOrderItemId: string;
        quantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * A message to the gift recipient, if applicable.
         */
        giftMessage?: string;
        /**
         * Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip.
         */
        displayableComment?: string;
        /**
         * Amazon's fulfillment network SKU of the item.
         */
        fulfillmentNetworkSku?: string;
        /**
         * The monetary value assigned by the seller to this item.
         */
        perUnitDeclaredValue?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The amount to be collected from the recipient for this item in a COD (Cash On Delivery) order.
         */
        perUnitPrice?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The tax on the amount to be collected from the recipient for this item in a COD (Cash On Delivery) order.
         */
        perUnitTax?: /* An amount of money, including units in the form of currency. */ Money;
    }
    /**
     * An array of item information for creating a fulfillment order.
     */
    export type CreateFulfillmentOrderItemList = /* Item information for creating a fulfillment order. */ CreateFulfillmentOrderItem[];
    /**
     * The request body schema for the createFulfillmentOrder operation.
     */
    export interface CreateFulfillmentOrderRequest {
        /**
         * The marketplace the fulfillment order is placed against.
         */
        marketplaceId?: string;
        /**
         * A fulfillment order identifier that the seller creates to track their fulfillment order. The SellerFulfillmentOrderId must be unique for each fulfillment order that a seller creates. If the seller's system already creates unique order identifiers, then these might be good values for them to use.
         */
        sellerFulfillmentOrderId: string;
        /**
         * A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of DisplayableOrderId should match the order identifier that the seller provides to the recipient. The seller can use the SellerFulfillmentOrderId for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.
         *
         * The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed.
         */
        displayableOrderId: string;
        /**
         * The date and time of the fulfillment order. Displays as the order date in recipient-facing materials such as the outbound shipment packing slip.
         */
        displayableOrderDate: Timestamp /* date-time */;
        /**
         * Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
         */
        displayableOrderComment: string;
        /**
         * The shipping method for the fulfillment order.
         */
        shippingSpeedCategory: /* The shipping method used for the fulfillment order. */ ShippingSpeedCategory;
        deliveryWindow?: /* The time range within which a Scheduled Delivery fulfillment order should be delivered. */ DeliveryWindow;
        /**
         * The destination address for the fulfillment order.
         */
        destinationAddress: Address;
        fulfillmentAction?: /* Specifies whether the fulfillment order should ship now or have an order hold put on it. */ FulfillmentAction;
        fulfillmentPolicy?: /* The FulfillmentPolicy value specified when you submitted the createFulfillmentOrder operation. */ FulfillmentPolicy;
        codSettings?: /* The COD (Cash On Delivery) charges that you associate with a COD fulfillment order. */ CODSettings;
        /**
         * The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format.
         */
        shipFromCountryCode?: string;
        notificationEmails?: /* A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. */ NotificationEmailList;
        /**
         * A list of features and their fulfillment policies to apply to the order.
         */
        featureConstraints?: /* Settings to apply to an order that includes the specified fulfillment feature. */ FeatureSettings[];
        /**
         * A list of items to include in the fulfillment order preview, including quantity.
         */
        items: /* An array of item information for creating a fulfillment order. */ CreateFulfillmentOrderItemList;
    }
    /**
     * The response schema for the createFulfillmentOrder operation.
     */
    export interface CreateFulfillmentOrderResponse {
        /**
         * One or more unexpected errors occurred during the createFulfillmentOrder operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The createFulfillmentReturn operation creates a fulfillment return for items that were fulfilled using the createFulfillmentOrder operation. For calls to createFulfillmentReturn, you must include ReturnReasonCode values returned by a previous call to the listReturnReasonCodes operation.
     */
    export interface CreateFulfillmentReturnRequest {
        items: /* An array of items to be returned. */ CreateReturnItemList;
    }
    /**
     * The response schema for the createFulfillmentReturn operation.
     */
    export interface CreateFulfillmentReturnResponse {
        /**
         * The payload for the createFulfillmentReturn operation.
         */
        payload?: CreateFulfillmentReturnResult;
        /**
         * One or more unexpected errors occurred during the createFulfillmentReturn operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface CreateFulfillmentReturnResult {
        returnItems?: /* An array of items that Amazon accepted for return. Returns empty if no items were accepted for return. */ ReturnItemList;
        invalidReturnItems?: /* An array of invalid return item information. */ InvalidReturnItemList;
        returnAuthorizations?: /* An array of return authorization information. */ ReturnAuthorizationList;
    }
    /**
     * The request schema for the createInboundShipmentPlan operation.
     */
    export interface CreateInboundShipmentPlanRequest {
        /**
         * The address from which the inbound shipment will be sent.
         */
        ShipFromAddress: Address;
        /**
         * The seller's preference for label preparation for an inbound shipment.
         */
        LabelPrepPreference: /* The preference for label preparation for an inbound shipment. */ LabelPrepPreference;
        /**
         * The two-character country code for the country where the inbound shipment is to be sent.
         *
         * Note: Not required. Specifying both ShipToCountryCode and ShipToCountrySubdivisionCode returns an error.
         *
         *  Values:
         *
         *  ShipToCountryCode values for North America:
         *  * CA – Canada
         *  * MX - Mexico
         *  * US - United States
         *
         * ShipToCountryCode values for MCI sellers in Europe:
         *  * DE – Germany
         *  * ES – Spain
         *  * FR – France
         *  * GB – United Kingdom
         *  * IT – Italy
         *
         * Default: The country code for the seller's home marketplace.
         */
        ShipToCountryCode?: string;
        /**
         * The two-character country code, followed by a dash and then up to three characters that represent the subdivision of the country where the inbound shipment is to be sent. For example, "IN-MH". In full ISO 3166-2 format.
         *
         * Note: Not required. Specifying both ShipToCountryCode and ShipToCountrySubdivisionCode returns an error.
         */
        ShipToCountrySubdivisionCode?: string;
        InboundShipmentPlanRequestItems: InboundShipmentPlanRequestItemList;
    }
    /**
     * The response schema for the createInboundShipmentPlan operation.
     */
    export interface CreateInboundShipmentPlanResponse {
        /**
         * The payload for the createInboundShipmentPlan operation.
         */
        payload?: CreateInboundShipmentPlanResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface CreateInboundShipmentPlanResult {
        InboundShipmentPlans?: /* A list of inbound shipment plan information */ InboundShipmentPlanList;
    }
    /**
     * The request schema for the createLegalDisclosure operation.
     */
    export interface CreateLegalDisclosureRequest {
        /**
         * Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        attachments?: /* Represents a file uploaded to a destination that was created by the createUploadDestination operation of the Uploads API. */ Attachment[];
    }
    /**
     * The response schema for the createLegalDisclosure operation.
     */
    export interface CreateLegalDisclosureResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the createNegativeFeedbackRemoval operation.
     */
    export interface CreateNegativeFeedbackRemovalResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the createProductReviewAndSellerFeedbackSolicitation operation.
     */
    export interface CreateProductReviewAndSellerFeedbackSolicitationResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response for the createReport operation.
     */
    export interface CreateReportResponse {
        /**
         * The payload for the createReport operation.
         */
        payload?: CreateReportResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface CreateReportResult {
        /**
         * The identifier for the report. This identifier is unique only in combination with a seller ID.
         */
        reportId: string;
    }
    /**
     * The response for the createReportSchedule operation.
     */
    export interface CreateReportScheduleResponse {
        /**
         * The payload for the createReportSchedule operation.
         */
        payload?: CreateReportScheduleResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface CreateReportScheduleResult {
        /**
         * The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
         */
        reportScheduleId: string;
    }
    export interface CreateReportScheduleSpecification {
        /**
         * The report type.
         */
        reportType: string;
        /**
         * A list of marketplace identifiers for the report schedule.
         */
        marketplaceIds: string[];
        reportOptions?: /* Additional information passed to reports. This varies by report type. */ ReportOptions;
        /**
         * One of a set of predefined ISO 8601 periods that specifies how often a report should be created.
         */
        period: "PT5M" | "PT15M" | "PT30M" | "PT1H" | "PT2H" | "PT4H" | "PT8H" | "PT12H" | "P1D" | "P2D" | "P3D" | "PT84H" | "P7D" | "P14D" | "P15D" | "P18D" | "P30D" | "P1M";
        /**
         * The date and time when the schedule will create its next report, in ISO 8601 date time format.
         */
        nextReportCreationTime?: string; // date-time
    }
    export interface CreateReportSpecification {
        reportOptions?: /* Additional information passed to reports. This varies by report type. */ ReportOptions;
        /**
         * The report type.
         */
        reportType: string;
        /**
         * The start of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
         */
        dataStartTime?: string; // date-time
        /**
         * The end of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
         */
        dataEndTime?: string; // date-time
        /**
         * A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
         */
        marketplaceIds: string[];
    }
    /**
     * An item that Amazon accepted for return.
     */
    export interface CreateReturnItem {
        /**
         * An identifier assigned by the seller to the return item.
         */
        sellerReturnItemId: string;
        /**
         * The identifier assigned to the item by the seller when the fulfillment order was created.
         */
        sellerFulfillmentOrderItemId: string;
        /**
         * The identifier for the shipment that is associated with the return item.
         */
        amazonShipmentId: string;
        /**
         * The return reason code assigned to the return item by the seller.
         */
        returnReasonCode: string;
        /**
         * An optional comment about the return item.
         */
        returnComment?: string;
    }
    /**
     * An array of items to be returned.
     */
    export type CreateReturnItemList = /* An item that Amazon accepted for return. */ CreateReturnItem[];
    /**
     * Request schema.
     */
    export interface CreateShipmentRequest {
        /**
         * Shipment information required for creating a shipment.
         */
        ShipmentRequestDetails: /* Shipment information required for requesting shipping service offers or for creating a shipment. */ ShipmentRequestDetails;
        ShippingServiceId: /* An Amazon-defined shipping service identifier. */ ShippingServiceIdentifier;
        /**
         * Identifies a shipping service order made by a carrier.
         */
        ShippingServiceOfferId?: string;
        /**
         * Hazardous materials options for a package. Consult the terms and conditions for each carrier for more information about hazardous materials.
         */
        HazmatType?: /* Hazardous materials options for a package. Consult the terms and conditions for each carrier for more information on hazardous materials. */ HazmatType;
        LabelFormatOption?: /* Whether to include a packing slip. */ LabelFormatOptionRequest;
        /**
         * A list of additional seller inputs required to ship this shipment.
         */
        ShipmentLevelSellerInputsList?: /* A list of additional seller input pairs required to purchase shipping. */ AdditionalSellerInputsList;
    }
    /**
     * Response schema.
     */
    export interface CreateShipmentResponse {
        /**
         * Shipment information.
         */
        payload?: /* The details of a shipment, including the shipment status. */ Shipment;
        /**
         * One or more unexpected errors occurred during the createShipment operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload schema for the createShipment operation.
     */
    export interface CreateShipmentResult {
        shipmentId: /* An Amazon-defined shipment identifier. */ ShipmentId;
        eligibleRates: /* A list of all the available rates that can be used to send the shipment. */ RateList;
    }
    /**
     * The request schema for the createSubscription operation.
     */
    export interface CreateSubscriptionRequest {
        /**
         * The version of the payload object to be used in the notification.
         */
        payloadVersion?: string;
        /**
         * The identifier for the destination where notifications will be delivered.
         */
        destinationId?: string;
    }
    /**
     * The response schema for the createSubscription operation.
     */
    export interface CreateSubscriptionResponse {
        /**
         * The payload for the createSubscription operation.
         */
        payload?: /* Represents a subscription to receive notifications. */ Subscription;
        /**
         * One or more unexpected errors occurred during the createSubscription operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The request schema for the createUnexpectedProblem operation.
     */
    export interface CreateUnexpectedProblemRequest {
        /**
         * The text to be sent to the buyer. Only links related to unexpected problem calls are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        text?: string;
    }
    /**
     * The response schema for the createUnexpectedProblem operation.
     */
    export interface CreateUnexpectedProblemResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the createUploadDestination operation.
     */
    export interface CreateUploadDestinationResponse {
        payload?: /* Information about an upload destination. */ UploadDestination;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The request schema for the createWarranty operation.
     */
    export interface CreateWarrantyRequest {
        /**
         * Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
         */
        attachments?: /* Represents a file uploaded to a destination that was created by the createUploadDestination operation of the Uploads API. */ Attachment[];
        /**
         * The start date of the warranty coverage to include in the message to the buyer.
         */
        coverageStartDate?: string; // date-time
        /**
         * The end date of the warranty coverage to include in the message to the buyer.
         */
        coverageEndDate?: string; // date-time
    }
    /**
     * The response schema for the createWarranty operation.
     */
    export interface CreateWarrantyResponse {
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The creator type attribute of an item.
     */
    export interface CreatorType {
        /**
         * The value of the attribute.
         */
        value?: string;
        /**
         * The role of the value.
         */
        Role?: string;
    }
    /**
     * A currency type and amount.
     */
    export interface Currency {
        /**
         * The three-digit currency code in ISO 4217 format.
         */
        CurrencyCode?: string;
        /**
         * The monetary value.
         */
        CurrencyAmount?: BigDecimal;
    }
    /**
     * Currency type and amount.
     */
    export interface CurrencyAmount {
        /**
         * Three-digit currency code in ISO 4217 format.
         */
        CurrencyCode: string;
        /**
         * The currency amount.
         */
        Amount: number; // double
    }
    /**
     * The currency code.
     */
    export type CurrencyCode = "USD" | "GBP";
    /**
     * The current delivery status of the package.
     */
    export type CurrentStatus = "IN_TRANSIT" | "DELIVERED" | "RETURNING" | "RETURNED" | "UNDELIVERABLE" | "DELAYED" | "AVAILABLE_FOR_PICKUP" | "CUSTOMER_ACTION";
    /**
     * Custom text to print on the label.
     *
     * Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support CustomTextForLabel.
     */
    export type CustomTextForLabel = string;
    export type Date = string; // date-time
    export type DateStringType = string; // date
    /**
     * A debt payment or debt adjustment.
     */
    export interface DebtRecoveryEvent {
        /**
         * The debt recovery type.
         *
         * Possible values:
         *
         * * DebtPayment
         *
         * * DebtPaymentFailure
         *
         * *DebtAdjustment
         */
        DebtRecoveryType?: string;
        /**
         * The amount applied for recovery.
         */
        RecoveryAmount?: /* A currency type and amount. */ Currency;
        /**
         * The amount returned for overpayment.
         */
        OverPaymentCredit?: /* A currency type and amount. */ Currency;
        DebtRecoveryItemList?: /* A list of debt recovery item information. */ DebtRecoveryItemList;
        ChargeInstrumentList?: /* A list of payment instruments. */ ChargeInstrumentList;
    }
    /**
     * A list of debt recovery event information.
     */
    export type DebtRecoveryEventList = /* A debt payment or debt adjustment. */ DebtRecoveryEvent[];
    /**
     * An item of a debt payment or debt adjustment.
     */
    export interface DebtRecoveryItem {
        /**
         * The amount applied for the recovery item.
         */
        RecoveryAmount?: /* A currency type and amount. */ Currency;
        /**
         * The original debt amount.
         */
        OriginalAmount?: /* A currency type and amount. */ Currency;
        /**
         * The beginning date and time of the financial event group that contains the debt. In ISO 8601 date time format.
         */
        GroupBeginDate?: Date /* date-time */;
        /**
         * The ending date and time of the financial event group that contains the debt. In ISO 8601 date time format.
         */
        GroupEndDate?: Date /* date-time */;
    }
    /**
     * A list of debt recovery item information.
     */
    export type DebtRecoveryItemList = /* An item of a debt payment or debt adjustment. */ DebtRecoveryItem[];
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
     */
    export type Decimal = string;
    /**
     * The decimal value and unit.
     */
    export interface DecimalWithUnits {
        /**
         * The decimal value.
         */
        value?: number;
        /**
         * The unit of the decimal value.
         */
        Units?: string;
    }
    /**
     * The response schema for the deleteDestination operation.
     */
    export interface DeleteDestinationResponse {
        /**
         * One or more unexpected errors occurred during the deleteDestination operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the deleteSubscriptionById operation.
     */
    export interface DeleteSubscriptionByIdResponse {
        /**
         * An unexpected condition occurred during the deleteSubscriptionById operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The delivery confirmation level.
     */
    export type DeliveryExperienceOption = "DeliveryConfirmationWithAdultSignature" | "DeliveryConfirmationWithSignature" | "DeliveryConfirmationWithoutSignature" | "NoTracking" | "NoPreference";
    /**
     * The delivery confirmation level.
     */
    export type DeliveryExperienceType = "DeliveryConfirmationWithAdultSignature" | "DeliveryConfirmationWithSignature" | "DeliveryConfirmationWithoutSignature" | "NoTracking";
    /**
     * The time range within which a Scheduled Delivery fulfillment order should be delivered.
     */
    export interface DeliveryWindow {
        /**
         * The date and time of the start of the Scheduled Delivery window, in ISO 8601 date time format.
         */
        startDate: Timestamp /* date-time */;
        /**
         * The date and time of the end of the Scheduled Delivery window, in ISO 8601 date time format.
         */
        endDate: Timestamp /* date-time */;
    }
    /**
     * An array of delivery windows.
     */
    export type DeliveryWindowList = /* The time range within which a Scheduled Delivery fulfillment order should be delivered. */ DeliveryWindow[];
    /**
     * Represents a destination created when you call the createDestination operation.
     */
    export interface Destination {
        /**
         * The developer-defined name for this destination.
         */
        name: string;
        /**
         * The destination identifier generated when you created the destination.
         */
        destinationId: string;
        /**
         * The resource that will receive notifications associated with this destination.
         */
        resource: /* The destination resource types. */ DestinationResource;
    }
    /**
     * A list of destinations.
     */
    export type DestinationList = /* Represents a destination created when you call the createDestination operation. */ Destination[];
    /**
     * The destination resource types.
     */
    export interface DestinationResource {
        /**
         * An Amazon Simple Queue Service (SQS) queue destination.
         */
        sqs?: /* The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination. */ SqsResource;
        /**
         * An Amazon EventBridge destination.
         */
        eventBridge?: /* Represents an Amazon EventBridge destination. */ EventBridgeResource;
    }
    /**
     * The information required to create a destination resource. Applications should use one resource type (sqs or eventBridge) per destination.
     */
    export interface DestinationResourceSpecification {
        /**
         * The information required to create an Amazon Simple Queue Service (SQS) queue destination.
         */
        sqs?: /* The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination. */ SqsResource;
        /**
         * The information required to create an Amazon EventBridge destination.
         */
        eventBridge?: /* The information required to create an Amazon EventBridge destination. */ EventBridgeResourceSpecification;
    }
    /**
     * The time range in which an item will likely be shipped once an order has been placed.
     */
    export interface DetailedShippingTimeType {
        /**
         * The minimum time, in hours, that the item will likely be shipped after the order has been placed.
         */
        minimumHours?: number; // int64
        /**
         * The maximum time, in hours, that the item will likely be shipped after the order has been placed.
         */
        maximumHours?: number; // int64
        /**
         * The date when the item will be available for shipping. Only displayed for items that are not currently available for shipping.
         */
        availableDate?: number;
        /**
         * Indicates whether the item is available for shipping now, or on a known or an unknown date in the future. If known, the availableDate property indicates the date that the item will be available for shipping. Possible values: NOW, FUTURE_WITHOUT_DATE, FUTURE_WITH_DATE.
         */
        availabilityType?: "NOW" | "FUTURE_WITHOUT_DATE" | "FUTURE_WITH_DATE";
    }
    /**
     * The dimension type attribute of an item.
     */
    export interface DimensionType {
        /**
         * The height attribute of the dimension.
         */
        Height?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The length attribute of the dimension.
         */
        Length?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The width attribute of the dimension.
         */
        Width?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The weight attribute of the dimension.
         */
        Weight?: /* The decimal value and unit. */ DecimalWithUnits;
    }
    /**
     * The dimension values and unit of measurement.
     */
    export interface Dimensions {
        /**
         * The length dimension.
         */
        Length: BigDecimalType /* double */;
        /**
         * The width dimension.
         */
        Width: BigDecimalType /* double */;
        /**
         * The height dimension.
         */
        Height: BigDecimalType /* double */;
        /**
         * The unit of measurement for the dimensions.
         */
        Unit: /* Indicates the unit of measurement. */ UnitOfMeasurement;
    }
    /**
     * A payment made directly to a seller.
     */
    export interface DirectPayment {
        /**
         * The type of payment.
         *
         * Possible values:
         *
         * * StoredValueCardRevenue - The amount that is deducted from the seller's account because the seller received money through a stored value card.
         *
         * * StoredValueCardRefund - The amount that Amazon returns to the seller if the order that is bought using a stored value card is refunded.
         *
         * * PrivateLabelCreditCardRevenue - The amount that is deducted from the seller's account because the seller received money through a private label credit card offered by Amazon.
         *
         * * PrivateLabelCreditCardRefund - The amount that Amazon returns to the seller if the order that is bought using a private label credit card offered by Amazon is refunded.
         *
         * * CollectOnDeliveryRevenue - The COD amount that the seller collected directly from the buyer.
         *
         * * CollectOnDeliveryRefund - The amount that Amazon refunds to the buyer if an order paid for by COD is refunded.
         */
        DirectPaymentType?: string;
        /**
         * The amount of the direct payment.
         */
        DirectPaymentAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of direct payment information.
     */
    export type DirectPaymentList = /* A payment made directly to a seller. */ DirectPayment[];
    /**
     * The district or county.
     */
    export type DistrictOrCounty = string;
    /**
     * The email address.
     */
    export type EmailAddress = string;
    /**
     * Error response returned when the request is unsuccessful.
     */
    export interface Error {
        /**
         * An error code that identifies the type of error that occurred.
         */
        code: string;
        /**
         * A message that describes the error condition in a human-readable form.
         */
        message: string;
        /**
         * Additional details that can help the caller understand or fix the issue.
         */
        details?: string;
    }
    /**
     * A list of error responses returned when a request is unsuccessful.
     */
    export type ErrorList = /* Error response returned when the request is unsuccessful. */ Error[];
    /**
     * The reason that the ASIN is invalid.
     */
    export type ErrorReason = "DoesNotExist" | "InvalidASIN";
    /**
     * The response schema for the estimateTransport operation.
     */
    export interface EstimateTransportResponse {
        /**
         * The payload for the estimateTransport operation.
         */
        payload?: CommonTransportResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * An event of a shipment
     */
    export interface Event {
        eventCode: /* The event code for the delivery event. */ EventCode;
        /**
         * The date and time of an event for a shipment.
         */
        eventTime: string; // date-time
        location?: /* The location where the person, business or institution is located. */ Location;
    }
    /**
     * Represents an Amazon EventBridge destination.
     */
    export interface EventBridgeResource {
        /**
         * The name of the partner event source associated with the destination.
         */
        name: string;
        /**
         * The AWS region in which you receive the notifications. For AWS regions that are supported in Amazon EventBridge, see https://docs.aws.amazon.com/general/latest/gr/ev.html.
         */
        region: string;
        /**
         * The identifier for the AWS account that is responsible for charges related to receiving notifications.
         */
        accountId: string;
    }
    /**
     * The information required to create an Amazon EventBridge destination.
     */
    export interface EventBridgeResourceSpecification {
        /**
         * The AWS region in which you will be receiving the notifications.
         */
        region: string;
        /**
         * The identifier for the AWS account that is responsible for charges related to receiving notifications.
         */
        accountId: string;
    }
    /**
     * The event code for the delivery event.
     */
    export type EventCode = "EVENT_101" | "EVENT_102" | "EVENT_201" | "EVENT_202" | "EVENT_203" | "EVENT_204" | "EVENT_205" | "EVENT_206" | "EVENT_301" | "EVENT_302" | "EVENT_304" | "EVENT_306" | "EVENT_307" | "EVENT_308" | "EVENT_309" | "EVENT_401" | "EVENT_402" | "EVENT_403" | "EVENT_404" | "EVENT_405" | "EVENT_406" | "EVENT_407" | "EVENT_408" | "EVENT_409" | "EVENT_411" | "EVENT_412" | "EVENT_413" | "EVENT_414" | "EVENT_415" | "EVENT_416" | "EVENT_417" | "EVENT_418" | "EVENT_419";
    /**
     * A list of events of a shipment.
     */
    export type EventList = /* An event of a shipment */ Event[];
    /**
     * A payment event for Fulfillment by Amazon (FBA) inventory liquidation. This event is used only in the US marketplace.
     */
    export interface FBALiquidationEvent {
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * The identifier for the original removal order.
         */
        OriginalRemovalOrderId?: string;
        /**
         * The amount paid by the liquidator for the seller's inventory. The seller receives this amount minus LiquidationFeeAmount.
         */
        LiquidationProceedsAmount?: /* A currency type and amount. */ Currency;
        /**
         * The fee charged to the seller by Amazon for liquidating the seller's FBA inventory.
         */
        LiquidationFeeAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of FBA inventory liquidation payment events.
     */
    export type FBALiquidationEventList = /* A payment event for Fulfillment by Amazon (FBA) inventory liquidation. This event is used only in the US marketplace. */ FBALiquidationEvent[];
    /**
     * A Multi-Channel Fulfillment feature.
     */
    export interface Feature {
        /**
         * The feature name.
         */
        featureName: string;
        /**
         * The feature description.
         */
        featureDescription: string;
        /**
         * When true, indicates that the seller is eligible to use the feature.
         */
        sellerEligible?: boolean;
    }
    /**
     * Settings to apply to an order that includes the specified fulfillment feature.
     */
    export interface FeatureSettings {
        /**
         * The name of the feature.
         */
        featureName?: string;
        /**
         * Specifies the policy to use when fulfilling an order.
         */
        featureFulfillmentPolicy?: "Required" | "NotRequired";
    }
    /**
     * Information about an SKU, including the count available, identifiers, and a list of overlapping SKUs that share the same inventory pool.
     */
    export interface FeatureSku {
        /**
         * Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.
         */
        sellerSku?: string;
        /**
         * The unique SKU used by Amazon's fulfillment network.
         */
        fnSku?: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        asin?: string;
        /**
         * The number of SKUs available for this service.
         */
        skuCount?: number;
        /**
         * Other seller SKUs that are shared across the same inventory.
         */
        overlappingSkus?: string[];
    }
    /**
     * An array of features.
     */
    export type Features = /* A Multi-Channel Fulfillment feature. */ Feature[];
    /**
     * Fee type and cost.
     */
    export interface Fee {
        /**
         * The type of fee.
         */
        name: "FBAPerUnitFulfillmentFee" | "FBAPerOrderFulfillmentFee" | "FBATransportationFee" | "FBAFulfillmentCODFee";
        /**
         * The amount of the fee.
         */
        amount: /* An amount of money, including units in the form of currency. */ Money;
    }
    /**
     * A fee associated with the event.
     */
    export interface FeeComponent {
        /**
         * The type of fee. For more information about Selling on Amazon fees, see [Selling on Amazon Fee Schedule](https://sellercentral.amazon.com/gp/help/200336920) on Seller Central. For more information about Fulfillment by Amazon fees, see [FBA features, services and fees](https://sellercentral.amazon.com/gp/help/201074400) on Seller Central.
         */
        FeeType?: string;
        /**
         * The amount of the fee.
         */
        FeeAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of fee component information.
     */
    export type FeeComponentList = /* A fee associated with the event. */ FeeComponent[];
    /**
     * The type of fee, fee amount, and other details.
     */
    export interface FeeDetail {
        /**
         * The type of fee charged to a seller.
         */
        FeeType: string;
        /**
         * The amount charged for a given fee.
         */
        FeeAmount: MoneyType;
        /**
         * The promotion amount for a given fee.
         */
        FeePromotion?: MoneyType;
        /**
         * The tax amount for a given fee.
         */
        TaxAmount?: MoneyType;
        /**
         * The final fee amount for a given fee.
         */
        FinalFee: MoneyType;
        IncludedFeeDetailList?: /* A list of other fees that contribute to a given fee. */ IncludedFeeDetailList;
    }
    /**
     * A list of other fees that contribute to a given fee.
     */
    export type FeeDetailList = /* The type of fee, fee amount, and other details. */ FeeDetail[];
    /**
     * Fee details for a specific fee.
     */
    export interface FeeLineItem {
        /**
         * The type of fee charged to the seller.
         */
        feeType: "FBAWeightBasedFee" | "FBAPerOrderFulfillmentFee" | "FBAPerUnitFulfillmentFee" | "Commission";
        /**
         * Amount charged to the seller for the specific fee type.
         */
        feeCharge: MoneyType;
    }
    /**
     * An array of fee type and cost pairs.
     */
    export type FeeList = /* Fee type and cost. */ Fee[];
    /**
     * The fee estimate for a specific item.
     */
    export interface FeePreview {
        /**
         * The Amazon Standard Identification Number (ASIN) value used to identify the item.
         */
        asin?: string;
        /**
         * The price that the seller plans to charge for the item.
         */
        price?: MoneyType;
        /**
         * A list of the Small and Light fees for the item.
         */
        feeBreakdown?: /* Fee details for a specific fee. */ FeeLineItem[];
        /**
         * The total fees charged if the item participated in the Small and Light program.
         */
        totalFees?: MoneyType;
        /**
         * One or more unexpected errors occurred during the getSmallAndLightFeePreview operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface Feed {
        /**
         * The identifier for the feed. This identifier is unique only in combination with a seller ID.
         */
        feedId: string;
        /**
         * The feed type.
         */
        feedType: string;
        /**
         * A list of identifiers for the marketplaces that the feed is applied to.
         */
        marketplaceIds?: string[];
        /**
         * The date and time when the feed was created, in ISO 8601 date time format.
         */
        createdTime: string; // date-time
        /**
         * The processing status of the feed.
         */
        processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
        /**
         * The date and time when feed processing started, in ISO 8601 date time format.
         */
        processingStartTime?: string; // date-time
        /**
         * The date and time when feed processing completed, in ISO 8601 date time format.
         */
        processingEndTime?: string; // date-time
        /**
         * The identifier for the feed document. This identifier is unique only in combination with a seller ID.
         */
        resultFeedDocumentId?: string;
    }
    export interface FeedDocument {
        /**
         * The identifier for the feed document. This identifier is unique only in combination with a seller ID.
         */
        feedDocumentId: string;
        /**
         * A presigned URL for the feed document. This URL expires after 5 minutes.
         */
        url: string;
        encryptionDetails: /* Encryption details for required client-side encryption and decryption of document contents. */ FeedDocumentEncryptionDetails;
        /**
         * If present, the feed document contents are compressed using the indicated algorithm.
         */
        compressionAlgorithm?: "GZIP";
    }
    /**
     * Encryption details for required client-side encryption and decryption of document contents.
     */
    export interface FeedDocumentEncryptionDetails {
        /**
         * The encryption standard required to encrypt or decrypt the document contents.
         */
        standard: "AES";
        /**
         * The vector to encrypt or decrypt the document contents using Cipher Block Chaining (CBC).
         */
        initializationVector: string;
        /**
         * The encryption key used to encrypt or decrypt the document contents.
         */
        key: string;
    }
    export type FeedList = Feed[];
    /**
     * Additional options to control the feed. These vary by feed type.
     */
    export interface FeedOptions {
        [name: string]: string;
    }
    /**
     * The total estimated fees for an item and a list of details.
     */
    export interface FeesEstimate {
        /**
         * The time for which the fees were estimated. This defaults to the time the request is made.
         */
        TimeOfFeesEstimation: string; // date-time
        /**
         * Total estimated fees for a given item, price, and fulfillment channel.
         */
        TotalFeesEstimate?: MoneyType;
        FeeDetailList?: /* A list of other fees that contribute to a given fee. */ FeeDetailList;
    }
    /**
     * An unexpected error occurred during this operation.
     */
    export interface FeesEstimateError {
        /**
         * An error type, identifying either the receiver or the sender as the originator of the error.
         */
        Type: string;
        /**
         * An error code that identifies the type of error that occurred.
         */
        Code: string;
        /**
         * A message that describes the error condition in a human-readable form.
         */
        Message: string;
        Detail: /* Additional information that can help the caller understand or fix the issue. */ FeesEstimateErrorDetail;
    }
    /**
     * Additional information that can help the caller understand or fix the issue.
     */
    export type FeesEstimateErrorDetail = unknown[];
    /**
     * An item identifier, marketplace, time of request, and other details that identify an estimate.
     */
    export interface FeesEstimateIdentifier {
        /**
         * A marketplace identifier.
         */
        MarketplaceId?: string;
        /**
         * The seller identifier.
         */
        SellerId?: string;
        /**
         * The type of item identifier specified.
         */
        IdType?: string;
        /**
         * The item identifier.
         */
        IdValue?: string;
        /**
         * When true, the offer is fulfilled by Amazon.
         */
        IsAmazonFulfilled?: boolean;
        /**
         * The item price on which the fee estimate is based.
         */
        PriceToEstimateFees?: /* Price information for an item, used to estimate fees. */ PriceToEstimateFees;
        /**
         * A unique identifier provided by the caller to track this request.
         */
        SellerInputIdentifier?: string;
    }
    export interface FeesEstimateRequest {
        /**
         * A marketplace identifier.
         */
        MarketplaceId: string;
        /**
         * When true, the offer is fulfilled by Amazon.
         */
        IsAmazonFulfilled?: boolean;
        /**
         * The product price that the fee estimate is based on.
         */
        PriceToEstimateFees: /* Price information for an item, used to estimate fees. */ PriceToEstimateFees;
        /**
         * The product price on which the fee estimate is based.
         */
        Identifier: string;
    }
    /**
     * An item identifier and the estimated fees for the item.
     */
    export interface FeesEstimateResult {
        /**
         * The status of the fee request. Possible values: Success, ClientError, ServiceError.
         */
        Status?: string;
        /**
         * Information used to identify a fees estimate request.
         */
        FeesEstimateIdentifier?: /* An item identifier, marketplace, time of request, and other details that identify an estimate. */ FeesEstimateIdentifier;
        /**
         * The total estimated fees for an item and a list of details.
         */
        FeesEstimate?: /* The total estimated fees for an item and a list of details. */ FeesEstimate;
        /**
         * An error object with a type, code, and message.
         */
        Error?: /* An unexpected error occurred during this operation. */ FeesEstimateError;
    }
    /**
     * The document data and checksum.
     */
    export interface FileContents {
        /**
         * Data for printing labels, in the form of a Base64-encoded, GZip-compressed string.
         */
        Contents: string;
        FileType: /* The file type for a label. */ FileType;
        /**
         * An MD5 hash to validate the PDF document data, in the form of a Base64-encoded string.
         */
        Checksum: string;
    }
    /**
     * The file type for a label.
     */
    export type FileType = "application/pdf" | "application/zpl" | "image/png";
    /**
     * Information related to a financial event group.
     */
    export interface FinancialEventGroup {
        /**
         * A unique identifier for the financial event group.
         */
        FinancialEventGroupId?: string;
        /**
         * The processing status of the financial event group indicates whether the balance of the financial event group is settled.
         *
         * Possible values:
         *
         * * Open
         *
         * * Closed
         */
        ProcessingStatus?: string;
        /**
         * The status of the fund transfer.
         */
        FundTransferStatus?: string;
        /**
         * The total amount in the currency of the marketplace in which the transactions occurred.
         */
        OriginalTotal?: /* A currency type and amount. */ Currency;
        /**
         * The total amount in the currency of the marketplace in which the funds were disbursed.
         */
        ConvertedTotal?: /* A currency type and amount. */ Currency;
        /**
         * The date and time when the disbursement or charge was initiated. Only present for closed settlements. In ISO 8601 date time format.
         */
        FundTransferDate?: Date /* date-time */;
        /**
         * The trace identifier used by sellers to look up transactions externally.
         */
        TraceId?: string;
        /**
         * The account tail of the payment instrument.
         */
        AccountTail?: string;
        /**
         * The balance at the beginning of the settlement period.
         */
        BeginningBalance?: /* A currency type and amount. */ Currency;
        /**
         * The date and time at which the financial event group is opened. In ISO 8601 date time format.
         */
        FinancialEventGroupStart?: Date /* date-time */;
        /**
         * The date and time at which the financial event group is closed. In ISO 8601 date time format.
         */
        FinancialEventGroupEnd?: Date /* date-time */;
    }
    /**
     * A list of financial event group information.
     */
    export type FinancialEventGroupList = /* Information related to a financial event group. */ FinancialEventGroup[];
    /**
     * Contains all information related to a financial event.
     */
    export interface FinancialEvents {
        /**
         * A list of shipment events.
         */
        ShipmentEventList?: /* A list of shipment event information. */ ShipmentEventList;
        /**
         * A list of refund events.
         */
        RefundEventList?: /* A list of shipment event information. */ ShipmentEventList;
        /**
         * A list of guarantee claim events.
         */
        GuaranteeClaimEventList?: /* A list of shipment event information. */ ShipmentEventList;
        /**
         * A list of chargeback events.
         */
        ChargebackEventList?: /* A list of shipment event information. */ ShipmentEventList;
        PayWithAmazonEventList?: /* A list of events related to the seller's Pay with Amazon account. */ PayWithAmazonEventList;
        ServiceProviderCreditEventList?: /* A list of information about solution provider credits. */ SolutionProviderCreditEventList;
        RetrochargeEventList?: /* A list of information about Retrocharge or RetrochargeReversal events. */ RetrochargeEventList;
        RentalTransactionEventList?: /* A list of rental transaction event information. */ RentalTransactionEventList;
        ProductAdsPaymentEventList?: /* A list of sponsored products payment events. */ ProductAdsPaymentEventList;
        ServiceFeeEventList?: /* A list of information about service fee events. */ ServiceFeeEventList;
        SellerDealPaymentEventList?: /* A list of payment events for deal-related fees. */ SellerDealPaymentEventList;
        DebtRecoveryEventList?: /* A list of debt recovery event information. */ DebtRecoveryEventList;
        LoanServicingEventList?: /* A list of loan servicing events. */ LoanServicingEventList;
        AdjustmentEventList?: /* A list of adjustment event information for the seller's account. */ AdjustmentEventList;
        SAFETReimbursementEventList?: /* A list of SAFETReimbursementEvents. */ SAFETReimbursementEventList;
        SellerReviewEnrollmentPaymentEventList?: /* A list of information about fee events for the Early Reviewer Program. */ SellerReviewEnrollmentPaymentEventList;
        FBALiquidationEventList?: /* A list of FBA inventory liquidation payment events. */ FBALiquidationEventList;
        CouponPaymentEventList?: /* A list of coupon payment event information. */ CouponPaymentEventList;
        ImagingServicesFeeEventList?: /* A list of fee events related to Amazon Imaging services. */ ImagingServicesFeeEventList;
        NetworkComminglingTransactionEventList?: /* A list of network commingling transaction events. */ NetworkComminglingTransactionEventList;
        AffordabilityExpenseEventList?: /* A list of expense information related to an affordability promotion. */ AffordabilityExpenseEventList;
        AffordabilityExpenseReversalEventList?: /* A list of expense information related to an affordability promotion. */ AffordabilityExpenseEventList;
    }
    /**
     * Specifies whether the fulfillment order should ship now or have an order hold put on it.
     */
    export type FulfillmentAction = "Ship" | "Hold";
    /**
     * Indicates whether the item is fulfilled by Amazon or by the seller (merchant).
     */
    export type FulfillmentChannelType = "Amazon" | "Merchant";
    /**
     * Contains the instructions about the fulfillment like where should it be fulfilled from.
     */
    export interface FulfillmentInstruction {
        /**
         * Denotes the recommended sourceId where the order should be fulfilled from.
         */
        FulfillmentSupplySourceId?: string;
    }
    /**
     * General information about a fulfillment order, including its status.
     */
    export interface FulfillmentOrder {
        /**
         * The fulfillment order identifier submitted with the createFulfillmentOrder operation.
         */
        sellerFulfillmentOrderId: string;
        /**
         * The identifier for the marketplace the fulfillment order is placed against.
         */
        marketplaceId: string;
        /**
         * A fulfillment order identifier submitted with the createFulfillmentOrder operation. Displays as the order identifier in recipient-facing materials such as the packing slip.
         */
        displayableOrderId: string;
        /**
         * A date and time submitted with the createFulfillmentOrder operation. Displays as the order date in recipient-facing materials such as the packing slip.
         */
        displayableOrderDate: Timestamp /* date-time */;
        /**
         * A text block submitted with the createFulfillmentOrder operation. Displays in recipient-facing materials such as the packing slip.
         */
        displayableOrderComment: string;
        shippingSpeedCategory: /* The shipping method used for the fulfillment order. */ ShippingSpeedCategory;
        deliveryWindow?: /* The time range within which a Scheduled Delivery fulfillment order should be delivered. */ DeliveryWindow;
        /**
         * The destination address submitted with the createFulfillmentOrder operation.
         */
        destinationAddress: Address;
        fulfillmentAction?: /* Specifies whether the fulfillment order should ship now or have an order hold put on it. */ FulfillmentAction;
        fulfillmentPolicy?: /* The FulfillmentPolicy value specified when you submitted the createFulfillmentOrder operation. */ FulfillmentPolicy;
        codSettings?: /* The COD (Cash On Delivery) charges that you associate with a COD fulfillment order. */ CODSettings;
        /**
         * The date and time that the fulfillment order was received by an Amazon fulfillment center.
         */
        receivedDate: Timestamp /* date-time */;
        fulfillmentOrderStatus: /* The current status of the fulfillment order. */ FulfillmentOrderStatus;
        /**
         * The date and time that the status of the fulfillment order last changed, in ISO 8601 date time format.
         */
        statusUpdatedDate: Timestamp /* date-time */;
        notificationEmails?: /* A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. */ NotificationEmailList;
        /**
         * A list of features and their fulfillment policies to apply to the order.
         */
        featureConstraints?: /* Settings to apply to an order that includes the specified fulfillment feature. */ FeatureSettings[];
    }
    /**
     * Item information for a fulfillment order.
     */
    export interface FulfillmentOrderItem {
        /**
         * The seller SKU of the item.
         */
        sellerSku: string;
        /**
         * A fulfillment order item identifier submitted with a call to the createFulfillmentOrder operation.
         */
        sellerFulfillmentOrderItemId: string;
        quantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * A message to the gift recipient, if applicable.
         */
        giftMessage?: string;
        /**
         * Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip.
         */
        displayableComment?: string;
        /**
         * Amazon's fulfillment network SKU of the item.
         */
        fulfillmentNetworkSku?: string;
        /**
         * Indicates whether the item is sellable or unsellable.
         */
        orderItemDisposition?: string;
        /**
         * The item quantity that was cancelled by the seller.
         */
        cancelledQuantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * The item quantity that is unfulfillable.
         */
        unfulfillableQuantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * The estimated date and time that the item quantity is scheduled to ship from the fulfillment center. Note that this value can change over time. If the shipment that contains the item quantity has been cancelled, estimatedShipDate is not returned.
         */
        estimatedShipDate?: Timestamp /* date-time */;
        /**
         * The estimated arrival date and time of the item quantity. Note that this value can change over time. If the shipment that contains the item quantity has been cancelled, estimatedArrivalDate is not returned.
         */
        estimatedArrivalDate?: Timestamp /* date-time */;
        /**
         * The amount to be collected from the recipient for this item in a COD (Cash On Delivery) order.
         */
        perUnitPrice?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The tax on the amount to be collected from the recipient for this item in a COD (Cash On Delivery) order.
         */
        perUnitTax?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The monetary value assigned by the seller to this item.
         */
        perUnitDeclaredValue?: /* An amount of money, including units in the form of currency. */ Money;
    }
    /**
     * An array of fulfillment order item information.
     */
    export type FulfillmentOrderItemList = /* Item information for a fulfillment order. */ FulfillmentOrderItem[];
    /**
     * The current status of the fulfillment order.
     */
    export type FulfillmentOrderStatus = "New" | "Received" | "Planning" | "Processing" | "Cancelled" | "Complete" | "CompletePartialled" | "Unfulfillable" | "Invalid";
    /**
     * The FulfillmentPolicy value specified when you submitted the createFulfillmentOrder operation.
     */
    export type FulfillmentPolicy = "FillOrKill" | "FillAll" | "FillAllAvailable";
    /**
     * Information about a fulfillment order preview, including delivery and fee information based on shipping method.
     */
    export interface FulfillmentPreview {
        shippingSpeedCategory: /* The shipping method used for the fulfillment order. */ ShippingSpeedCategory;
        scheduledDeliveryInfo?: /* Delivery information for a scheduled delivery. */ ScheduledDeliveryInfo;
        /**
         * When true, this fulfillment order preview is fulfillable.
         */
        isFulfillable: boolean;
        /**
         * When true, this fulfillment order preview is for COD (Cash On Delivery).
         */
        isCODCapable: boolean;
        /**
         * Estimated shipping weight for this fulfillment order preview.
         */
        estimatedShippingWeight?: /* The weight of the package. */ Weight;
        /**
         * The estimated fulfillment fees for this fulfillment order preview, if applicable.
         */
        estimatedFees?: /* An array of fee type and cost pairs. */ FeeList;
        fulfillmentPreviewShipments?: /* An array of fulfillment preview shipment information. */ FulfillmentPreviewShipmentList;
        unfulfillablePreviewItems?: /* An array of unfulfillable preview item information. */ UnfulfillablePreviewItemList;
        /**
         * Error codes associated with the fulfillment order preview that indicate why the order is not fulfillable.
         *
         * Error code examples:
         *
         * DeliverySLAUnavailable
         * InvalidDestinationAddress
         */
        orderUnfulfillableReasons?: StringList;
        /**
         * The marketplace the fulfillment order is placed against.
         */
        marketplaceId: string;
        /**
         * A list of features and their fulfillment policies to apply to the order.
         */
        featureConstraints?: /* Settings to apply to an order that includes the specified fulfillment feature. */ FeatureSettings[];
    }
    /**
     * Item information for a shipment in a fulfillment order preview.
     */
    export interface FulfillmentPreviewItem {
        /**
         * The seller SKU of the item.
         */
        sellerSku: string;
        /**
         * The item quantity.
         */
        quantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * A fulfillment order item identifier that the seller created with a call to the createFulfillmentOrder operation.
         */
        sellerFulfillmentOrderItemId: string;
        /**
         * The estimated shipping weight of the item quantity for a single item, as identified by sellerSku, in a shipment.
         */
        estimatedShippingWeight?: /* The weight of the package. */ Weight;
        /**
         * The method used to calculate the estimated shipping weight.
         */
        shippingWeightCalculationMethod?: "Package" | "Dimensional";
    }
    /**
     * An array of fulfillment preview item information.
     */
    export type FulfillmentPreviewItemList = /* Item information for a shipment in a fulfillment order preview. */ FulfillmentPreviewItem[];
    /**
     * An array of fulfillment preview information.
     */
    export type FulfillmentPreviewList = /* Information about a fulfillment order preview, including delivery and fee information based on shipping method. */ FulfillmentPreview[];
    /**
     * Delivery and item information for a shipment in a fulfillment order preview.
     */
    export interface FulfillmentPreviewShipment {
        /**
         * The earliest date that the shipment is expected to be sent from the fulfillment center, in ISO 8601 date time format.
         */
        earliestShipDate?: Timestamp /* date-time */;
        /**
         * The latest date that the shipment is expected to be sent from the fulfillment center, in ISO 8601 date time format.
         */
        latestShipDate?: Timestamp /* date-time */;
        /**
         * The earliest date that the shipment is expected to arrive at its destination.
         */
        earliestArrivalDate?: Timestamp /* date-time */;
        /**
         * The latest date that the shipment is expected to arrive at its destination, in ISO 8601 date time format.
         */
        latestArrivalDate?: Timestamp /* date-time */;
        /**
         * Provides additional insight into the shipment timeline when exact delivery dates are not able to be precomputed.
         */
        shippingNotes?: string[];
        /**
         * Information about the items in the shipment.
         */
        fulfillmentPreviewItems: /* An array of fulfillment preview item information. */ FulfillmentPreviewItemList;
    }
    /**
     * An array of fulfillment preview shipment information.
     */
    export type FulfillmentPreviewShipmentList = /* Delivery and item information for a shipment in a fulfillment order preview. */ FulfillmentPreviewShipment[];
    /**
     * Indicates if the return item has been processed by a fulfillment center.
     */
    export type FulfillmentReturnItemStatus = "New" | "Processed";
    /**
     * Delivery and item information for a shipment in a fulfillment order.
     */
    export interface FulfillmentShipment {
        /**
         * A shipment identifier assigned by Amazon.
         */
        amazonShipmentId: string;
        /**
         * An identifier for the fulfillment center that the shipment will be sent from.
         */
        fulfillmentCenterId: string;
        /**
         * The current status of the shipment.
         */
        fulfillmentShipmentStatus: "PENDING" | "SHIPPED" | "CANCELLED_BY_FULFILLER" | "CANCELLED_BY_SELLER";
        /**
         * The meaning of the shippingDate value depends on the current status of the shipment. If the current value of FulfillmentShipmentStatus is:
         *
         * * Pending - shippingDate represents the estimated time that the shipment will leave the Amazon fulfillment center.
         *
         * * Shipped - shippingDate represents the date that the shipment left the Amazon fulfillment center.
         * If a shipment includes more than one package, shippingDate applies to all of the packages in the shipment. If the value of FulfillmentShipmentStatus is CancelledByFulfiller or CancelledBySeller, shippingDate is not returned. The value must be in ISO 8601 date time format.
         */
        shippingDate?: Timestamp /* date-time */;
        /**
         * The estimated arrival date and time of the shipment, in ISO 8601 date time format. Note that this value can change over time. If a shipment includes more than one package, estimatedArrivalDate applies to all of the packages in the shipment. If the shipment has been cancelled, estimatedArrivalDate is not returned.
         */
        estimatedArrivalDate?: Timestamp /* date-time */;
        /**
         * Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren't available.
         */
        shippingNotes?: string[];
        fulfillmentShipmentItem: /* An array of fulfillment shipment item information. */ FulfillmentShipmentItemList;
        fulfillmentShipmentPackage?: /* An array of fulfillment shipment package information. */ FulfillmentShipmentPackageList;
    }
    /**
     * Item information for a shipment in a fulfillment order.
     */
    export interface FulfillmentShipmentItem {
        /**
         * The seller SKU of the item.
         */
        sellerSku: string;
        /**
         * The fulfillment order item identifier that the seller created and submitted with a call to the createFulfillmentOrder operation.
         */
        sellerFulfillmentOrderItemId: string;
        quantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * An identifier for the package that contains the item quantity.
         */
        packageNumber?: number; // int32
        /**
         * The serial number of the shipped item.
         */
        serialNumber?: string;
    }
    /**
     * An array of fulfillment shipment item information.
     */
    export type FulfillmentShipmentItemList = /* Item information for a shipment in a fulfillment order. */ FulfillmentShipmentItem[];
    /**
     * An array of fulfillment shipment information.
     */
    export type FulfillmentShipmentList = /* Delivery and item information for a shipment in a fulfillment order. */ FulfillmentShipment[];
    /**
     * Package information for a shipment in a fulfillment order.
     */
    export interface FulfillmentShipmentPackage {
        /**
         * Identifies a package in a shipment.
         */
        packageNumber: number; // int32
        /**
         * Identifies the carrier who will deliver the shipment to the recipient.
         */
        carrierCode: string;
        /**
         * The tracking number, if provided, can be used to obtain tracking and delivery information.
         */
        trackingNumber?: string;
        /**
         * The estimated arrival date and time of the package, in ISO 8601 date time format.
         */
        estimatedArrivalDate?: Timestamp /* date-time */;
    }
    /**
     * An array of fulfillment shipment package information.
     */
    export type FulfillmentShipmentPackageList = /* Package information for a shipment in a fulfillment order. */ FulfillmentShipmentPackage[];
    /**
     * The response schema for the getAccount operation.
     */
    export interface GetAccountResponse {
        /**
         * The payload for getAccount operation
         */
        payload?: /* The account related data. */ Account;
        /**
         * Encountered errors for the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Request schema.
     */
    export interface GetAdditionalSellerInputsRequest {
        ShippingServiceId: /* An Amazon-defined shipping service identifier. */ ShippingServiceIdentifier;
        /**
         * The address from which to ship.
         */
        ShipFromAddress: Address;
        /**
         * An Amazon defined order identifier
         */
        OrderId: /* An Amazon-defined order identifier, in 3-7-7 format. <br>**Pattern** : `[0-9A-Z]{3}-[0-9]{7}-[0-9]{7}`. */ AmazonOrderId;
    }
    /**
     * Response schema.
     */
    export interface GetAdditionalSellerInputsResponse {
        payload?: /* The payload for the getAdditionalSellerInputs operation. */ GetAdditionalSellerInputsResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload for the getAdditionalSellerInputs operation.
     */
    export interface GetAdditionalSellerInputsResult {
        ShipmentLevelFields?: /* A list of additional inputs. */ AdditionalInputsList;
        ItemLevelFieldsList?: /* A list of item level fields. */ ItemLevelFieldsList;
    }
    /**
     * The response schema for the GetAttributes operation.
     */
    export interface GetAttributesResponse {
        /**
         * The list of attributes related to the buyer.
         */
        buyer?: {
            /**
             * The buyer's language of preference, indicated with a locale-specific language tag. Examples: "en-US", "zh-CN", and "en-GB".
             */
            locale?: string;
        };
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the GetAuthorizationCode operation.
     */
    export interface GetAuthorizationCodeResponse {
        payload?: /* A Login with Amazon (LWA) authorization code. */ AuthorizationCode;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getBillOfLading operation.
     */
    export interface GetBillOfLadingResponse {
        /**
         * The payload for the getBillOfLading operation.
         */
        payload?: BillOfLadingDownloadURL;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetCatalogItemResponse {
        /**
         * The payload for the getCatalogItem operation.
         */
        payload?: /* An item in the Amazon catalog. */ Item;
        /**
         * One or more unexpected errors occurred during the getCatalogItem operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getDestination operation.
     */
    export interface GetDestinationResponse {
        /**
         * The payload for the getDestination operation.
         */
        payload?: /* Represents a destination created when you call the createDestination operation. */ Destination;
        /**
         * One or more unexpected errors occurred during the getDestination operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getDestinations operation.
     */
    export interface GetDestinationsResponse {
        /**
         * The payload for the getDestinations operation.
         */
        payload?: /* A list of destinations. */ DestinationList;
        /**
         * One or more unexpected errors occurred during the getDestinations operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Request schema.
     */
    export interface GetEligibleShipmentServicesRequest {
        /**
         * Shipment information required for requesting shipping service offers.
         */
        ShipmentRequestDetails: /* Shipment information required for requesting shipping service offers or for creating a shipment. */ ShipmentRequestDetails;
        ShippingOfferingFilter?: /* Filter for use when requesting eligible shipping services. */ ShippingOfferingFilter;
    }
    /**
     * Response schema.
     */
    export interface GetEligibleShipmentServicesResponse {
        payload?: /* The payload for the getEligibleShipmentServices operation. */ GetEligibleShipmentServicesResult;
        /**
         * One or more unexpected errors occurred during this operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload for the getEligibleShipmentServices operation.
     */
    export interface GetEligibleShipmentServicesResult {
        /**
         * A list of shipping services offers.
         */
        ShippingServiceList: /* A list of shipping services offers. */ ShippingServiceList;
        RejectedShippingServiceList?: /* List of services that were for some reason unavailable for this request */ RejectedShippingServiceList;
        TemporarilyUnavailableCarrierList?: /* A list of temporarily unavailable carriers. */ TemporarilyUnavailableCarrierList;
        TermsAndConditionsNotAcceptedCarrierList?: /* List of carriers whose terms and conditions were not accepted by the seller. */ TermsAndConditionsNotAcceptedCarrierList;
    }
    /**
     * The breakdown of eligibility inventory by feature.
     */
    export interface GetFeatureInventoryResponse {
        payload?: /* The payload for the getEligibileInventory operation. */ GetFeatureInventoryResult;
        /**
         * One or more unexpected errors occurred during the getFeatureInventory operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload for the getEligibileInventory operation.
     */
    export interface GetFeatureInventoryResult {
        /**
         * The requested marketplace.
         */
        marketplaceId: string;
        /**
         * The name of the feature.
         */
        featureName: string;
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        nextToken?: string;
        /**
         * An array of SKUs eligible for this feature and the quantity available.
         */
        featureSkus?: /* Information about an SKU, including the count available, identifiers, and a list of overlapping SKUs that share the same inventory pool. */ FeatureSku[];
    }
    /**
     * The response schema for the getFeatureSKU operation.
     */
    export interface GetFeatureSkuResponse {
        payload?: /* The payload for the getFeatureSKU operation. */ GetFeatureSkuResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload for the getFeatureSKU operation.
     */
    export interface GetFeatureSkuResult {
        /**
         * The requested marketplace.
         */
        marketplaceId: string;
        /**
         * The name of the feature.
         */
        featureName: string;
        /**
         * When true, the seller SKU is eligible for the requested feature.
         */
        isEligible: boolean;
        /**
         * A list of one or more reasons that the seller SKU is ineligibile for the feature.
         *
         * Possible values:
         * * MERCHANT_NOT_ENROLLED - The merchant isn't enrolled for the feature.
         * * SKU_NOT_ELIGIBLE - The SKU doesn't reside in a warehouse that supports the feature.
         * * INVALID_SKU - There is an issue with the SKU provided.
         */
        ineligibleReasons?: string[];
        /**
         * Information about the SKU, including the count available, identifiers, and a list of overlapping SKUs that share the same inventory pool.
         */
        skuInfo?: /* Information about an SKU, including the count available, identifiers, and a list of overlapping SKUs that share the same inventory pool. */ FeatureSku;
    }
    /**
     * The response schema for the getFeatures operation.
     */
    export interface GetFeaturesResponse {
        payload?: /* The payload for the getFeatures operation. */ GetFeaturesResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload for the getFeatures operation.
     */
    export interface GetFeaturesResult {
        features: /* An array of features. */ Features;
    }
    /**
     * Response schema.
     */
    export interface GetFeedDocumentResponse {
        payload?: FeedDocument;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Response schema.
     */
    export interface GetFeedResponse {
        payload?: Feed;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Response schema.
     */
    export interface GetFeedsResponse {
        payload?: FeedList;
        /**
         * Returned when the number of results exceeds pageSize. To get the next page of results, call the getFeeds operation with this token as the only parameter.
         */
        nextToken?: string;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getFulfillmentOrder operation.
     */
    export interface GetFulfillmentOrderResponse {
        /**
         * The payload for the getFulfillmentOrder operation.
         */
        payload?: GetFulfillmentOrderResult;
        /**
         * One or more unexpected errors occurred during the getFulfillmentOrder operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetFulfillmentOrderResult {
        fulfillmentOrder: /* General information about a fulfillment order, including its status. */ FulfillmentOrder;
        fulfillmentOrderItems: /* An array of fulfillment order item information. */ FulfillmentOrderItemList;
        fulfillmentShipments?: /* An array of fulfillment shipment information. */ FulfillmentShipmentList;
        returnItems: /* An array of items that Amazon accepted for return. Returns empty if no items were accepted for return. */ ReturnItemList;
        returnAuthorizations: /* An array of return authorization information. */ ReturnAuthorizationList;
    }
    /**
     * Item information for a fulfillment order preview.
     */
    export interface GetFulfillmentPreviewItem {
        /**
         * The seller SKU of the item.
         */
        sellerSku: string;
        quantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * The monetary value assigned by the seller to this item. This is a required field if this order is an export order.
         */
        perUnitDeclaredValue?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * A fulfillment order item identifier that the seller creates to track items in the fulfillment preview.
         */
        sellerFulfillmentOrderItemId: string;
    }
    /**
     * An array of fulfillment preview item information.
     */
    export type GetFulfillmentPreviewItemList = /* Item information for a fulfillment order preview. */ GetFulfillmentPreviewItem[];
    /**
     * The request body schema for the getFulfillmentPreview operation.
     */
    export interface GetFulfillmentPreviewRequest {
        /**
         * The marketplace the fulfillment order is placed against.
         */
        marketplaceId?: string;
        /**
         * The destination address for the fulfillment order preview.
         */
        address: Address;
        /**
         * Identifying information and quantity information for the items in the fulfillment order preview.
         */
        items: /* An array of fulfillment preview item information. */ GetFulfillmentPreviewItemList;
        /**
         * A list of shipping methods used for creating fulfillment order previews.
         *
         * Possible values:
         *
         * * Standard - Standard shipping method.
         * * Expedited - Expedited shipping method.
         * * Priority - Priority shipping method.
         * * ScheduledDelivery - Scheduled Delivery shipping method.
         * Note: Shipping method service level agreements vary by marketplace. Sellers should see the Seller Central website in their marketplace for shipping method service level agreements and fulfillment fees.
         */
        shippingSpeedCategories?: ShippingSpeedCategoryList;
        /**
         * Specifies whether to return fulfillment order previews that are for COD (Cash On Delivery).
         *
         * Possible values:
         *
         * * true - Returns all fulfillment order previews (both for COD and not for COD).
         * * false - Returns only fulfillment order previews that are not for COD.
         */
        includeCODFulfillmentPreview?: boolean;
        /**
         * Specifies whether to return the ScheduledDeliveryInfo response object, which contains the available delivery windows for a Scheduled Delivery. The ScheduledDeliveryInfo response object can only be returned for fulfillment order previews with ShippingSpeedCategories = ScheduledDelivery.
         */
        includeDeliveryWindows?: boolean;
        /**
         * A list of features and their fulfillment policies to apply to the order.
         */
        featureConstraints?: /* Settings to apply to an order that includes the specified fulfillment feature. */ FeatureSettings[];
    }
    /**
     * The response schema for the getFulfillmentPreview operation.
     */
    export interface GetFulfillmentPreviewResponse {
        /**
         * The response payload for the getFulfillmentPreview operation.
         */
        payload?: /* A list of fulfillment order previews, including estimated shipping weights, estimated shipping fees, and estimated ship dates and arrival dates. */ GetFulfillmentPreviewResult;
        /**
         * One or more unexpected errors occurred during the getFulfillmentPreview operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * A list of fulfillment order previews, including estimated shipping weights, estimated shipping fees, and estimated ship dates and arrival dates.
     */
    export interface GetFulfillmentPreviewResult {
        fulfillmentPreviews?: /* An array of fulfillment preview information. */ FulfillmentPreviewList;
    }
    /**
     * The response schema for the getInboundGuidance operation.
     */
    export interface GetInboundGuidanceResponse {
        /**
         * The payload for the getInboundGuidance operation.
         */
        payload?: GetInboundGuidanceResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetInboundGuidanceResult {
        SKUInboundGuidanceList?: /* A list of SKU inbound guidance information. */ SKUInboundGuidanceList;
        InvalidSKUList?: /* A list of invalid SKU values and the reason they are invalid. */ InvalidSKUList;
        ASINInboundGuidanceList?: /* A list of ASINs and their associated inbound guidance. */ ASINInboundGuidanceList;
        InvalidASINList?: /* A list of invalid ASIN values and the reasons they are invalid. */ InvalidASINList;
    }
    /**
     * The Response schema.
     */
    export interface GetInventorySummariesResponse {
        /**
         * The payload for the getInventorySummaries operation.
         */
        payload?: /* The payload schema for the getInventorySummaries operation. */ GetInventorySummariesResult;
        pagination?: /* The process of returning the results to a request in batches of a defined size called pages. This is done to exercise some control over result size and overall throughput. It's a form of traffic management. */ Pagination;
        /**
         * One or more unexpected errors occurred during the getInventorySummaries operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload schema for the getInventorySummaries operation.
     */
    export interface GetInventorySummariesResult {
        granularity: /* Describes a granularity at which inventory data can be aggregated. For example, if you use Marketplace granularity, the fulfillable quantity will reflect inventory that could be fulfilled in the given marketplace. */ Granularity;
        inventorySummaries: /* A list of inventory summaries. */ InventorySummaries;
    }
    /**
     * The response schema for the getItemEligibilityPreview operation.
     */
    export interface GetItemEligibilityPreviewResponse {
        /**
         * The payload for the getItemEligibilityPreview operation.
         */
        payload?: /* The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes. */ ItemEligibilityPreview;
        /**
         * An unexpected condition occurred during the GetItemEligibilityPreview operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getLabels operation.
     */
    export interface GetLabelsResponse {
        /**
         * The payload for the getLabels operation.
         */
        payload?: LabelDownloadURL;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getMarketplaceParticipations operation.
     */
    export interface GetMarketplaceParticipationsResponse {
        /**
         * The payload for the getMarketplaceParticipations operation.
         */
        payload?: /* List of marketplace participations. */ MarketplaceParticipationList;
        /**
         * Encountered errors for the getMarketplaceParticipations operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Describes a messaging action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.
     */
    export interface GetMessagingActionResponse {
        _links?: {
            self: /* A Link object. */ LinkObject;
            schema: /* A Link object. */ LinkObject;
        };
        _embedded?: {
            schema?: GetSchemaResponse;
        };
        payload?: /* A simple object containing the name of the template. */ MessagingAction;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getMessagingActionsForOrder operation.
     */
    export interface GetMessagingActionsForOrderResponse {
        _links?: {
            self: /* A Link object. */ LinkObject;
            /**
             * Eligible actions for the specified amazonOrderId.
             */
            actions: /* A Link object. */ LinkObject[];
        };
        _embedded?: {
            actions: /* Describes a messaging action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input. */ GetMessagingActionResponse[];
        };
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Request schema.
     */
    export interface GetMyFeesEstimateRequest {
        FeesEstimateRequest?: FeesEstimateRequest;
    }
    export interface GetMyFeesEstimateResponse {
        /**
         * The payload for the operation.
         */
        payload?: /* Response schema. */ GetMyFeesEstimateResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Response schema.
     */
    export interface GetMyFeesEstimateResult {
        /**
         * The item's estimated fees.
         */
        FeesEstimateResult?: /* An item identifier and the estimated fees for the item. */ FeesEstimateResult;
    }
    /**
     * The response schema for the getListingOffers and getItemOffers operations.
     */
    export interface GetOffersResponse {
        /**
         * The payload for the getListingOffers and getItemOffers operations.
         */
        payload?: GetOffersResult;
        /**
         * One or more unexpected errors occurred during the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetOffersResult {
        /**
         * A marketplace identifier.
         */
        MarketplaceID: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN?: string;
        /**
         * The stock keeping unit (SKU) of the item.
         */
        SKU?: string;
        /**
         * The condition of the item.
         */
        ItemCondition: /* Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished, Club. */ ConditionType;
        /**
         * The status of the operation.
         */
        status: string;
        /**
         * Metadata that identifies the item.
         */
        Identifier: /* Information that identifies an item. */ ItemIdentifier;
        /**
         * Pricing information about the item.
         */
        Summary: /* Contains price information about the product, including the LowestPrices and BuyBoxPrices, the ListPrice, the SuggestedLowerPricePlusShipping, and NumberOfOffers and NumberOfBuyBoxEligibleOffers. */ Summary;
        /**
         * A list of offer details. The list is the same length as the TotalOfferCount in the Summary or 20, whichever is less.
         */
        Offers: OfferDetailList;
    }
    /**
     * The response schema for the getOrderAddress operation.
     */
    export interface GetOrderAddressResponse {
        /**
         * The payload for the getOrderAddress operations.
         */
        payload?: /* The shipping address for the order. */ OrderAddress;
        /**
         * One or more unexpected errors occurred during the getOrderAddress operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getOrderBuyerInfo operation.
     */
    export interface GetOrderBuyerInfoResponse {
        /**
         * The payload for the getOrderBuyerInfo operations.
         */
        payload?: /* Buyer information for an order. */ OrderBuyerInfo;
        /**
         * One or more unexpected errors occurred during the getOrderBuyerInfo operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getOrderItemsBuyerInfo operation.
     */
    export interface GetOrderItemsBuyerInfoResponse {
        /**
         * The payload for the getOrderItemsBuyerInfo operation.
         */
        payload?: /* A single order item's buyer information list with the order ID. */ OrderItemsBuyerInfoList;
        /**
         * One or more unexpected errors occurred during the getOrderItemsBuyerInfo operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getOrderItems operation.
     */
    export interface GetOrderItemsResponse {
        /**
         * The payload for the getOrderItems operation.
         */
        payload?: /* The order items list along with the order ID. */ OrderItemsList;
        /**
         * One or more unexpected errors occurred during the getOrderItems operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getOrderMetrics operation.
     */
    export interface GetOrderMetricsResponse {
        /**
         * The payload for the getOrderMetrics operation.
         */
        payload?: /* A set of order metrics, each scoped to a particular time interval. */ OrderMetricsList;
        /**
         * Encountered errors for the getOrderMetrics operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getOrder operation.
     */
    export interface GetOrderResponse {
        /**
         * The payload for the getOrder operation.
         */
        payload?: /* Order information. */ Order;
        /**
         * One or more unexpected errors occurred during the getOrder operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getOrders operation.
     */
    export interface GetOrdersResponse {
        /**
         * The payload for the getOrders operation.
         */
        payload?: /* A list of orders along with additional information to make subsequent API calls. */ OrdersList;
        /**
         * One or more unexpected errors occurred during the getOrders operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getPackageTrackingDetails operation.
     */
    export interface GetPackageTrackingDetailsResponse {
        /**
         * The payload for the getPackageTrackingDetails operation.
         */
        payload?: PackageTrackingDetails;
        /**
         * One or more unexpected errors occurred during the getPackageTrackingDetails operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getPreorderInfo operation.
     */
    export interface GetPreorderInfoResponse {
        /**
         * The payload for the getPreorderInfo operation.
         */
        payload?: GetPreorderInfoResult;
        /**
         * One or more unexpected errors occurred during the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetPreorderInfoResult {
        /**
         * Indicates whether the shipment contains items that have been enabled for pre-order. For more information about enabling items for pre-order, see the Seller Central Help.
         */
        ShipmentContainsPreorderableItems?: boolean;
        /**
         * Indicates whether this shipment has been confirmed for pre-order.
         */
        ShipmentConfirmedForPreorder?: boolean;
        /**
         * Date that the shipment would need to arrive at an Amazon fulfillment center to avoid delivery promise breaks for pre-ordered items if this shipment is later confirmed for pre-order. In YYYY-MM-DD format. See also the confirmPreorder operation.
         */
        NeedByDate?: DateStringType /* date */;
        /**
         * Date in YYYY-MM-DD format that determines which pre-order items in the shipment are eligible for pre-order. If this shipment is confirmed for pre-order with a subsequent call to the confirmPreorder operation, the pre-order Buy Box will appear for any pre-order items in the shipment with a release date on or after this date. Call the getShipmentItems operation to get the release dates for the pre-order items in this shipment.
         */
        ConfirmedFulfillableDate?: DateStringType /* date */;
    }
    /**
     * The response schema for the getPrepInstructions operation.
     */
    export interface GetPrepInstructionsResponse {
        /**
         * The payload for the getPrepInstructions operation.
         */
        payload?: GetPrepInstructionsResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetPrepInstructionsResult {
        SKUPrepInstructionsList?: /* A list of SKU labeling requirements and item preparation instructions. */ SKUPrepInstructionsList;
        InvalidSKUList?: /* A list of invalid SKU values and the reason they are invalid. */ InvalidSKUList;
        ASINPrepInstructionsList?: /* A list of item preparation instructions. */ ASINPrepInstructionsList;
        InvalidASINList?: /* A list of invalid ASIN values and the reasons they are invalid. */ InvalidASINList;
    }
    /**
     * The response schema for the getPricing and getCompetitivePricing operations.
     */
    export interface GetPricingResponse {
        /**
         * The payload for the getPricing and getCompetitivePricing operations.
         */
        payload?: PriceList;
        /**
         * One or more unexpected errors occurred during the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload schema for the getRates operation.
     */
    export interface GetRatesRequest {
        shipTo: Address;
        shipFrom: Address;
        serviceTypes: /* A list of service types that can be used to send the shipment. */ ServiceTypeList;
        /**
         * The start date and time. This defaults to the current date and time.
         */
        shipDate?: string; // date-time
        containerSpecifications: /* A list of container specifications. */ ContainerSpecificationList;
    }
    /**
     * The response schema for the getRates operation.
     */
    export interface GetRatesResponse {
        /**
         * The payload for getRates operation
         */
        payload?: /* The payload schema for the getRates operation. */ GetRatesResult;
        /**
         * Encountered errors for the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload schema for the getRates operation.
     */
    export interface GetRatesResult {
        serviceRates: /* A list of service rates. */ ServiceRateList;
    }
    /**
     * Response schema.
     */
    export interface GetReportDocumentResponse {
        payload?: ReportDocument;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response for the getReport operation.
     */
    export interface GetReportResponse {
        /**
         * The payload for the getReport operation.
         */
        payload?: Report;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response for the getReportSchedule operation.
     */
    export interface GetReportScheduleResponse {
        /**
         * The payload for the getReportSchedule operation.
         */
        payload?: /* Detailed information about a report schedule. */ ReportSchedule;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response for the getReportSchedules operation.
     */
    export interface GetReportSchedulesResponse {
        /**
         * The payload for the getReportSchedules operation.
         */
        payload?: ReportScheduleList;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response for the getReports operation.
     */
    export interface GetReportsResponse {
        /**
         * The payload for the getReports operation.
         */
        payload?: ReportList;
        /**
         * Returned when the number of results exceeds pageSize. To get the next page of results, call getReports with this token as the only parameter.
         */
        nextToken?: string;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetSchemaResponse {
        _links?: {
            self: /* A Link object. */ LinkObject;
        };
        payload?: /* A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>. */ Schema;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the GetServiceJobByServiceJobId operation.
     */
    export interface GetServiceJobByServiceJobIdResponse {
        /**
         * The payload for the GetServiceJobByServiceJobId operation.
         */
        payload?: /* The job details of a service. */ ServiceJob;
        /**
         * An unexpected condition occurred during the GetServiceJobByServiceJobId operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Response schema for GetJobs operation.
     */
    export interface GetServiceJobsResponse {
        /**
         * The payload for the GetJobs operation.
         */
        payload?: /* The payload for the GetJobs operation. */ JobListing;
        /**
         * An unexpected condition occurred during the GetServiceJobs operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getShipmentItems operation.
     */
    export interface GetShipmentItemsResponse {
        /**
         * The payload for the getShipmentItems operation.
         */
        payload?: GetShipmentItemsResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetShipmentItemsResult {
        /**
         * A list of item information for an inbound shipment.
         */
        ItemData?: /* A list of inbound shipment item information. */ InboundShipmentItemList;
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        NextToken?: string;
    }
    /**
     * Response schema.
     */
    export interface GetShipmentResponse {
        /**
         * The payload for the getShipment operation.
         */
        payload?: /* The details of a shipment, including the shipment status. */ Shipment;
        /**
         * One or more unexpected errors occurred during this operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getShipments operation.
     */
    export interface GetShipmentsResponse {
        /**
         * The payload for the getShipments operation.
         */
        payload?: GetShipmentsResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetShipmentsResult {
        /**
         * Information about your inbound shipments.
         */
        ShipmentData?: /* A list of inbound shipment information. */ InboundShipmentList;
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        NextToken?: string;
    }
    /**
     * Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.
     */
    export interface GetSolicitationActionResponse {
        _links?: {
            self: /* A Link object. */ LinkObject;
            schema: /* A Link object. */ LinkObject;
        };
        _embedded?: {
            schema?: GetSchemaResponse;
        };
        payload?: /* A simple object containing the name of the template. */ SolicitationsAction;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getSolicitationActionsForOrder operation.
     */
    export interface GetSolicitationActionsForOrderResponse {
        _links?: {
            self: /* A Link object. */ LinkObject;
            /**
             * Eligible actions for the specified amazonOrderId.
             */
            actions: /* A Link object. */ LinkObject[];
        };
        _embedded?: {
            actions: /* Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input. */ GetSolicitationActionResponse[];
        };
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getSubscriptionById operation.
     */
    export interface GetSubscriptionByIdResponse {
        /**
         * The payload for the getSubscriptionById operation.
         */
        payload?: /* Represents a subscription to receive notifications. */ Subscription;
        /**
         * An unexpected condition occurred during the getSubscriptionById operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getSubscription operation.
     */
    export interface GetSubscriptionResponse {
        /**
         * The payload for the getSubscription operation.
         */
        payload?: /* Represents a subscription to receive notifications. */ Subscription;
        /**
         * One or more unexpected errors occurred during the getSubscription operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getTrackingInformation operation.
     */
    export interface GetTrackingInformationResponse {
        /**
         * The payload for getTrackingInformation operation
         */
        payload?: /* The payload schema for the getTrackingInformation operation. */ TrackingInformation;
        /**
         * Encountered errors for the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The response schema for the getTransportDetails operation.
     */
    export interface GetTransportDetailsResponse {
        /**
         * The payload for the getTransportDetails operation.
         */
        payload?: GetTransportDetailsResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface GetTransportDetailsResult {
        TransportContent?: /* Inbound shipment information, including carrier details, shipment status, and the workflow status for a request for shipment with an Amazon-partnered carrier. */ TransportContent;
    }
    /**
     * Describes a granularity at which inventory data can be aggregated. For example, if you use Marketplace granularity, the fulfillable quantity will reflect inventory that could be fulfilled in the given marketplace.
     */
    export interface Granularity {
        /**
         * The granularity type for the inventory aggregation level.
         */
        granularityType?: "Marketplace";
        /**
         * The granularity ID for the specified granularity type. When granularityType is Marketplace, specify the marketplaceId.
         */
        granularityId?: string;
    }
    /**
     * A reason for the current inbound guidance for an item.
     */
    export type GuidanceReason = "SlowMovingASIN" | "NoApplicableGuidance";
    /**
     * A list of inbound guidance reason information.
     */
    export type GuidanceReasonList = /* A reason for the current inbound guidance for an item. */ GuidanceReason[];
    /**
     * Hazardous materials options for a package. Consult the terms and conditions for each carrier for more information on hazardous materials.
     */
    export type HazmatType = "None" | "LQHazmat";
    export interface IdentifierType {
        /**
         * Indicates the item is identified by MarketPlaceId and ASIN.
         */
        MarketplaceASIN?: ASINIdentifier;
        /**
         * Indicates the item is identified by MarketPlaceId, SellerId, and SellerSKU.
         */
        SKUIdentifier?: SellerSKUIdentifier;
    }
    /**
     * The image attribute of the item.
     */
    export interface Image {
        /**
         * The image URL attribute of the item.
         */
        URL?: string;
        /**
         * The image height attribute of the item.
         */
        Height?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The image width attribute of the item.
         */
        Width?: /* The decimal value and unit. */ DecimalWithUnits;
    }
    /**
     * A fee event related to Amazon Imaging services.
     */
    export interface ImagingServicesFeeEvent {
        /**
         * The identifier for the imaging services request.
         */
        ImagingRequestBillingItemID?: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item for which the imaging service was requested.
         */
        ASIN?: string;
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * A list of fees associated with the event.
         */
        FeeList?: /* A list of fee component information. */ FeeComponentList;
    }
    /**
     * A list of fee events related to Amazon Imaging services.
     */
    export type ImagingServicesFeeEventList = /* A fee event related to Amazon Imaging services. */ ImagingServicesFeeEvent[];
    /**
     * Specific inbound guidance for an item.
     */
    export type InboundGuidance = "InboundNotRecommended" | "InboundOK";
    /**
     * Inbound shipment information used to create and update inbound shipments.
     */
    export interface InboundShipmentHeader {
        /**
         * The name for the shipment. Use a naming convention that helps distinguish between shipments over time, such as the date the shipment was created.
         */
        ShipmentName: string;
        /**
         * The return address.
         */
        ShipFromAddress: Address;
        /**
         * The identifier for the fulfillment center to which the shipment will be shipped. Get this value from the InboundShipmentPlan object in the response returned by the createInboundShipmentPlan operation.
         */
        DestinationFulfillmentCenterId: string;
        /**
         * Indicates whether or not an inbound shipment contains case-packed boxes. Note: A shipment must contain either all case-packed boxes or all individually packed boxes.
         *
         * Possible values:
         *
         * true - All boxes in the shipment must be case packed.
         *
         * false - All boxes in the shipment must be individually packed.
         *
         * Note: If AreCasesRequired = true for an inbound shipment, then the value of QuantityInCase must be greater than zero for every item in the shipment. Otherwise the service returns an error.
         */
        AreCasesRequired?: boolean;
        ShipmentStatus: /* Indicates the status of the inbound shipment. When used with the createInboundShipment operation, WORKING is the only valid value. When used with the updateInboundShipment operation, possible values are WORKING, SHIPPED or CANCELLED. */ ShipmentStatus;
        /**
         * The preference for label preparation for an inbound shipment.
         */
        LabelPrepPreference: /* The preference for label preparation for an inbound shipment. */ LabelPrepPreference;
        IntendedBoxContentsSource?: /* How the seller intends to provide box contents information for a shipment. */ IntendedBoxContentsSource;
    }
    /**
     * Information about the seller's inbound shipments. Returned by the listInboundShipments operation.
     */
    export interface InboundShipmentInfo {
        /**
         * The shipment identifier submitted in the request.
         */
        ShipmentId?: string;
        /**
         * The name for the inbound shipment.
         */
        ShipmentName?: string;
        /**
         * The return address.
         */
        ShipFromAddress: Address;
        /**
         * An Amazon fulfillment center identifier created by Amazon.
         */
        DestinationFulfillmentCenterId?: string;
        ShipmentStatus?: /* Indicates the status of the inbound shipment. When used with the createInboundShipment operation, WORKING is the only valid value. When used with the updateInboundShipment operation, possible values are WORKING, SHIPPED or CANCELLED. */ ShipmentStatus;
        LabelPrepType?: /* The type of label preparation that is required for the inbound shipment. */ LabelPrepType;
        /**
         * Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired = true for an inbound shipment, all items in the inbound shipment must be case packed.
         */
        AreCasesRequired: boolean;
        /**
         * Date by which the shipment must arrive at the Amazon fulfillment center to avoid delivery promise breaks for pre-ordered items.
         */
        ConfirmedNeedByDate?: DateStringType /* date */;
        BoxContentsSource?: /* Where the seller provided box contents information for a shipment. */ BoxContentsSource;
        /**
         * An estimate of the manual processing fee charged by Amazon for boxes without box content information. This is only returned when BoxContentsSource is NONE.
         */
        EstimatedBoxContentsFee?: /* The manual processing fee per unit and total fee for a shipment. */ BoxContentsFeeDetails;
    }
    /**
     * Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation.
     */
    export interface InboundShipmentItem {
        /**
         * A shipment identifier originally returned by the createInboundShipmentPlan operation.
         */
        ShipmentId?: string;
        /**
         * The seller SKU of the item.
         */
        SellerSKU: string;
        /**
         * Amazon's fulfillment network SKU of the item.
         */
        FulfillmentNetworkSKU?: string;
        /**
         * The item quantity that you are shipping.
         */
        QuantityShipped: /* The item quantity. */ Quantity /* int32 */;
        /**
         * The item quantity that has been received at an Amazon fulfillment center.
         */
        QuantityReceived?: /* The item quantity. */ Quantity /* int32 */;
        /**
         * The item quantity in each case, for case-packed items. Note that QuantityInCase multiplied by the number of boxes in the inbound shipment equals QuantityShipped. Also note that all of the boxes of an inbound shipment must either be case packed or individually packed. For that reason, when you submit the createInboundShipment or the updateInboundShipment operation, the value of QuantityInCase must be provided for every item in the shipment or for none of the items in the shipment.
         */
        QuantityInCase?: /* The item quantity. */ Quantity /* int32 */;
        /**
         * The date that a pre-order item will be available for sale.
         */
        ReleaseDate?: DateStringType /* date */;
        PrepDetailsList?: /* A list of preparation instructions and who is responsible for that preparation. */ PrepDetailsList;
    }
    /**
     * A list of inbound shipment item information.
     */
    export type InboundShipmentItemList = /* Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation. */ InboundShipmentItem[];
    /**
     * A list of inbound shipment information.
     */
    export type InboundShipmentList = /* Information about the seller's inbound shipments. Returned by the listInboundShipments operation. */ InboundShipmentInfo[];
    /**
     * Inbound shipment information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation.
     */
    export interface InboundShipmentPlan {
        /**
         * A shipment identifier originally returned by the createInboundShipmentPlan operation.
         */
        ShipmentId: string;
        /**
         * An Amazon fulfillment center identifier created by Amazon.
         */
        DestinationFulfillmentCenterId: string;
        /**
         * The address of the Amazon fulfillment center to which to ship the items.
         */
        ShipToAddress: Address;
        LabelPrepType: /* The type of label preparation that is required for the inbound shipment. */ LabelPrepType;
        /**
         * SKU and quantity information for the items in the shipment.
         */
        Items: /* A list of inbound shipment plan item information. */ InboundShipmentPlanItemList;
        EstimatedBoxContentsFee?: /* The manual processing fee per unit and total fee for a shipment. */ BoxContentsFeeDetails;
    }
    /**
     * Item information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation.
     */
    export interface InboundShipmentPlanItem {
        /**
         * The seller SKU of the item.
         */
        SellerSKU: string;
        /**
         * Amazon's fulfillment network SKU of the item.
         */
        FulfillmentNetworkSKU: string;
        /**
         * The item quantity that you are shipping.
         */
        Quantity: /* The item quantity. */ Quantity /* int32 */;
        PrepDetailsList?: /* A list of preparation instructions and who is responsible for that preparation. */ PrepDetailsList;
    }
    /**
     * A list of inbound shipment plan item information.
     */
    export type InboundShipmentPlanItemList = /* Item information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation. */ InboundShipmentPlanItem[];
    /**
     * A list of inbound shipment plan information
     */
    export type InboundShipmentPlanList = /* Inbound shipment information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation. */ InboundShipmentPlan[];
    /**
     * Item information for creating an inbound shipment plan. Submitted with a call to the createInboundShipmentPlan operation.
     */
    export interface InboundShipmentPlanRequestItem {
        /**
         * The seller SKU of the item.
         */
        SellerSKU: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN: string;
        Condition: /* The condition of the item. */ Condition;
        Quantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * The item quantity in each case, for case-packed items. Note that QuantityInCase multiplied by the number of cases in the inbound shipment equals Quantity. Also note that all of the boxes of an inbound shipment must either be case packed or individually packed. For that reason, when you submit the createInboundShipmentPlan operation, the value of QuantityInCase must be provided for every item in the shipment or for none of the items in the shipment.
         */
        QuantityInCase?: /* The item quantity. */ Quantity /* int32 */;
        PrepDetailsList?: /* A list of preparation instructions and who is responsible for that preparation. */ PrepDetailsList;
    }
    export type InboundShipmentPlanRequestItemList = /* Item information for creating an inbound shipment plan. Submitted with a call to the createInboundShipmentPlan operation. */ InboundShipmentPlanRequestItem[];
    /**
     * The request schema for an inbound shipment.
     */
    export interface InboundShipmentRequest {
        InboundShipmentHeader: /* Inbound shipment information used to create and update inbound shipments. */ InboundShipmentHeader;
        InboundShipmentItems: /* A list of inbound shipment item information. */ InboundShipmentItemList;
        /**
         * A marketplace identifier. Specifies the marketplace where the product would be stored.
         */
        MarketplaceId: string;
    }
    /**
     * The response schema for this operation.
     */
    export interface InboundShipmentResponse {
        /**
         * The payload for this operation.
         */
        payload?: InboundShipmentResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface InboundShipmentResult {
        /**
         * The shipment identifier submitted in the request.
         */
        ShipmentId: string;
    }
    /**
     * The type of fee, fee amount, and other details.
     */
    export interface IncludedFeeDetail {
        /**
         * The type of fee charged to a seller.
         */
        FeeType: string;
        /**
         * The amount charged for a given fee.
         */
        FeeAmount: MoneyType;
        /**
         * The promotion amount for a given fee.
         */
        FeePromotion?: MoneyType;
        /**
         * The tax amount for a given fee.
         */
        TaxAmount?: MoneyType;
        /**
         * The final fee amount for a given fee.
         */
        FinalFee: MoneyType;
    }
    /**
     * A list of other fees that contribute to a given fee.
     */
    export type IncludedFeeDetailList = /* The type of fee, fee amount, and other details. */ IncludedFeeDetail[];
    /**
     * Indicates whether the additional seller input is at the item or shipment level.
     */
    export type InputTargetType = "SHIPMENT_LEVEL" | "ITEM_LEVEL";
    /**
     * How the seller intends to provide box contents information for a shipment.
     */
    export type IntendedBoxContentsSource = "NONE" | "FEED" | "2D_BARCODE";
    export interface InvalidASIN {
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN?: string;
        /**
         * The reason that the ASIN is invalid.
         */
        ErrorReason?: /* The reason that the ASIN is invalid. */ ErrorReason;
    }
    /**
     * A list of invalid ASIN values and the reasons they are invalid.
     */
    export type InvalidASINList = InvalidASIN[];
    /**
     * The reason that the item is invalid for return.
     */
    export interface InvalidItemReason {
        invalidItemReasonCode: /* A code for why the item is invalid for return. */ InvalidItemReasonCode;
        /**
         * A human readable description of the invalid item reason code.
         */
        description: string;
    }
    /**
     * A code for why the item is invalid for return.
     */
    export type InvalidItemReasonCode = "InvalidValues" | "DuplicateRequest" | "NoCompletedShipItems" | "NoReturnableQuantity";
    /**
     * An item that is invalid for return.
     */
    export interface InvalidReturnItem {
        /**
         * An identifier assigned by the seller to the return item.
         */
        sellerReturnItemId: string;
        /**
         * The identifier assigned to the item by the seller when the fulfillment order was created.
         */
        sellerFulfillmentOrderItemId: string;
        invalidItemReason: /* The reason that the item is invalid for return. */ InvalidItemReason;
    }
    /**
     * An array of invalid return item information.
     */
    export type InvalidReturnItemList = /* An item that is invalid for return. */ InvalidReturnItem[];
    export interface InvalidSKU {
        /**
         * The seller SKU of the item.
         */
        SellerSKU?: string;
        /**
         * The reason why the seller SKU is invalid.
         */
        ErrorReason?: /* The reason that the ASIN is invalid. */ ErrorReason;
    }
    /**
     * A list of invalid SKU values and the reason they are invalid.
     */
    export type InvalidSKUList = InvalidSKU[];
    /**
     * Summarized inventory details. This object will not appear if the details parameter in the request is false.
     */
    export interface InventoryDetails {
        /**
         * The item quantity that can be picked, packed, and shipped.
         */
        fulfillableQuantity?: number;
        /**
         * The number of units in an inbound shipment for which you have notified Amazon.
         */
        inboundWorkingQuantity?: number;
        /**
         * The number of units in an inbound shipment that you have notified Amazon about and have provided a tracking number.
         */
        inboundShippedQuantity?: number;
        /**
         * The number of units that have not yet been received at an Amazon fulfillment center for processing, but are part of an inbound shipment with some units that have already been received and processed.
         */
        inboundReceivingQuantity?: number;
        reservedQuantity?: /* The quantity of reserved inventory. */ ReservedQuantity;
        researchingQuantity?: /* The number of misplaced or warehouse damaged units that are actively being confirmed at our fulfillment centers. */ ResearchingQuantity;
        unfulfillableQuantity?: /* The quantity of unfulfillable inventory. */ UnfulfillableQuantity;
    }
    /**
     * A list of inventory summaries.
     */
    export type InventorySummaries = /* Inventory summary for a specific item. */ InventorySummary[];
    /**
     * Inventory summary for a specific item.
     */
    export interface InventorySummary {
        /**
         * The Amazon Standard Identification Number (ASIN) of an item.
         */
        asin?: string;
        /**
         * Amazon's fulfillment network SKU identifier.
         */
        fnSku?: string;
        /**
         * The seller SKU of the item.
         */
        sellerSku?: string;
        /**
         * The condition of the item as described by the seller (for example, New Item).
         */
        condition?: string;
        inventoryDetails?: /* Summarized inventory details. This object will not appear if the details parameter in the request is false. */ InventoryDetails;
        /**
         * The date and time that any quantity was last updated.
         */
        lastUpdatedTime?: string; // date-time
        /**
         * The localized language product title of the item within the specific marketplace.
         */
        productName?: string;
        /**
         * The total number of units in an inbound shipment or in Amazon fulfillment centers.
         */
        totalQuantity?: number;
    }
    /**
     * An item in the Amazon catalog.
     */
    export interface Item {
        /**
         * The identifiers that uniquely identify the item.
         */
        Identifiers: IdentifierType;
        /**
         * A list of attributes of the item.
         */
        AttributeSets?: /* A list of attributes for the item. */ AttributeSetList;
        /**
         * A list of variation relationship information for the item.
         */
        Relationships?: /* A list of variation relationship information, if applicable for the item. */ RelationshipList;
        /**
         * A list of sales rank information for the item by category.
         */
        SalesRankings?: /* A list of sales rank information for the item by category. */ SalesRankList;
    }
    /**
     * Delivery information for the item.
     */
    export interface ItemDelivery {
        /**
         * The date and time of the latest Estimated Delivery Date (EDD) of all the items with an EDD. In ISO 8601 format.
         */
        estimatedDeliveryDate?: string; // date-time
        /**
         * Promised delivery information for the item.
         */
        itemDeliveryPromise?: /* Promised delivery information for the item. */ ItemDeliveryPromise;
    }
    /**
     * Promised delivery information for the item.
     */
    export interface ItemDeliveryPromise {
        /**
         * The date and time of the start of the promised delivery window, in ISO 8601 format.
         */
        startTime?: string; // date-time
        /**
         * The date and time of the end of the promised delivery window, in ISO 8601 format.
         */
        endTime?: string; // date-time
    }
    /**
     * The description of the item.
     */
    export type ItemDescription = string;
    /**
     * The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes.
     */
    export interface ItemEligibilityPreview {
        /**
         * The ASIN for which eligibility was determined.
         */
        asin: string;
        /**
         * The marketplace for which eligibility was determined.
         */
        marketplaceId?: string;
        /**
         * The program for which eligibility was determined.
         */
        program: "INBOUND" | "COMMINGLING";
        /**
         * Indicates if the item is eligible for the program.
         */
        isEligibleForProgram: boolean;
        /**
         * Potential Ineligibility Reason Codes.
         */
        ineligibilityReasonList?: ("FBA_INB_0004" | "FBA_INB_0006" | "FBA_INB_0007" | "FBA_INB_0008" | "FBA_INB_0009" | "FBA_INB_0010" | "FBA_INB_0011" | "FBA_INB_0012" | "FBA_INB_0013" | "FBA_INB_0014" | "FBA_INB_0015" | "FBA_INB_0016" | "FBA_INB_0017" | "FBA_INB_0018" | "FBA_INB_0019" | "FBA_INB_0034" | "FBA_INB_0035" | "FBA_INB_0036" | "FBA_INB_0037" | "FBA_INB_0038" | "FBA_INB_0050" | "FBA_INB_0051" | "FBA_INB_0053" | "FBA_INB_0055" | "FBA_INB_0056" | "FBA_INB_0059" | "FBA_INB_0065" | "FBA_INB_0066" | "FBA_INB_0067" | "FBA_INB_0068" | "FBA_INB_0095" | "FBA_INB_0097" | "FBA_INB_0098" | "FBA_INB_0099" | "FBA_INB_0100" | "FBA_INB_0103" | "FBA_INB_0104" | "UNKNOWN_INB_ERROR_CODE")[];
    }
    /**
     * Information that identifies an item.
     */
    export interface ItemIdentifier {
        /**
         * A marketplace identifier. Specifies the marketplace from which prices are returned.
         */
        MarketplaceId: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN?: string;
        /**
         * The seller stock keeping unit (SKU) of the item.
         */
        SellerSKU?: string;
        /**
         * The condition of the item.
         */
        ItemCondition: /* Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished, Club. */ ConditionType;
    }
    export interface ItemLevelFields {
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        Asin: string;
        AdditionalInputs: /* A list of additional inputs. */ AdditionalInputsList;
    }
    /**
     * A list of item level fields.
     */
    export type ItemLevelFieldsList = ItemLevelFields[];
    /**
     * A list of items.
     */
    export type ItemList = /* An item in the Amazon catalog. */ Item[];
    /**
     * The number of items.
     */
    export type ItemQuantity = number; // int32
    /**
     * The payload for the GetJobs operation.
     */
    export interface JobListing {
        /**
         * Total result size of the query result.
         */
        totalResultSize?: number;
        /**
         * A generated string used to pass information to your next request.If nextPageToken is returned, pass the value of nextPageToken to the pageToken to get next results.
         */
        nextPageToken?: string;
        /**
         * A generated string used to pass information to your next request.If previousPageToken is returned, pass the value of previousPageToken to the pageToken to get previous page results.
         */
        previousPageToken?: string;
        /**
         * List of job details for the given input.
         */
        jobs?: /* The job details of a service. */ ServiceJob[];
    }
    /**
     * Data for creating a shipping label and dimensions for printing the label.
     */
    export interface Label {
        CustomTextForLabel?: /**
         * Custom text to print on the label.
         *
         * Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support CustomTextForLabel.
         */
        CustomTextForLabel;
        Dimensions: /* Dimensions for printing a shipping label. */ LabelDimensions;
        FileContents: /* The document data and checksum. */ FileContents;
        LabelFormat?: /* The label format. */ LabelFormat;
        StandardIdForLabel?: /* The type of standard identifier to print on the label. */ StandardIdForLabel;
    }
    /**
     * Custom text for shipping labels.
     */
    export interface LabelCustomization {
        CustomTextForLabel?: /**
         * Custom text to print on the label.
         *
         * Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support CustomTextForLabel.
         */
        CustomTextForLabel;
        StandardIdForLabel?: /* The type of standard identifier to print on the label. */ StandardIdForLabel;
    }
    /**
     * A label dimension.
     */
    export type LabelDimension = number;
    /**
     * Dimensions for printing a shipping label.
     */
    export interface LabelDimensions {
        /**
         * The length dimension.
         */
        Length: /* A label dimension. */ LabelDimension;
        /**
         * The width dimension.
         */
        Width: /* A label dimension. */ LabelDimension;
        /**
         * The unit of measurement.
         */
        Unit: /* The unit of length. */ UnitOfLength;
    }
    export interface LabelDownloadURL {
        /**
         * URL to download the label for the package. Note: The URL will only be valid for 15 seconds
         */
        DownloadURL?: string;
    }
    /**
     * The label format.
     */
    export type LabelFormat = "PDF" | "PNG" | "ZPL203" | "ZPL300" | "ShippingServiceDefault";
    /**
     * List of label formats.
     */
    export type LabelFormatList = /* The label format. */ LabelFormat[];
    /**
     * The label format details and whether to include a packing slip.
     */
    export interface LabelFormatOption {
        /**
         * When true, include a packing slip with the label.
         */
        IncludePackingSlipWithLabel?: boolean;
        LabelFormat?: /* The label format. */ LabelFormat;
    }
    /**
     * Whether to include a packing slip.
     */
    export interface LabelFormatOptionRequest {
        /**
         * When true, include a packing slip with the label.
         */
        IncludePackingSlipWithLabel?: boolean;
    }
    /**
     * The preference for label preparation for an inbound shipment.
     */
    export type LabelPrepPreference = "SELLER_LABEL" | "AMAZON_LABEL_ONLY" | "AMAZON_LABEL_PREFERRED";
    /**
     * The type of label preparation that is required for the inbound shipment.
     */
    export type LabelPrepType = "NO_LABEL" | "SELLER_LABEL" | "AMAZON_LABEL";
    /**
     * Label details including label stream, format, size.
     */
    export interface LabelResult {
        containerReferenceId?: /* An identifier for the container. This must be unique within all the containers in the same shipment. */ ContainerReferenceId;
        /**
         * The tracking identifier assigned to the container.
         */
        trackingId?: string;
        label?: /* Data for creating a shipping label and dimensions for printing the label. */ Label;
    }
    /**
     * A list of label results
     */
    export type LabelResultList = /* Label details including label stream, format, size. */ LabelResult[];
    /**
     * The label specification info.
     */
    export interface LabelSpecification {
        /**
         * The format of the label. Enum of PNG only for now.
         */
        labelFormat: "PNG";
        /**
         * The label stock size specification in length and height. Enum of 4x6 only for now.
         */
        labelStockSize: "4x6";
    }
    /**
     * Contains binary image data encoded as a base-64 string.
     */
    export type LabelStream = string;
    /**
     * The language type attribute of an item.
     */
    export interface LanguageType {
        /**
         * The name attribute of the item.
         */
        Name?: string;
        /**
         * The type attribute of the item.
         */
        Type?: string;
        /**
         * The audio format attribute of the item.
         */
        AudioFormat?: string;
    }
    /**
     * The length.
     */
    export interface Length {
        /**
         * The value in units.
         */
        value?: number;
        unit?: /* The unit of length. */ UnitOfLength;
    }
    /**
     * A Link object.
     */
    export interface LinkObject {
        /**
         * A URI for this object.
         */
        href: string;
        /**
         * An identifier for this object.
         */
        name?: string;
    }
    /**
     * The response schema for the listAllFulfillmentOrders operation.
     */
    export interface ListAllFulfillmentOrdersResponse {
        /**
         * The payload for the listAllFulfillmentOrders operation.
         */
        payload?: ListAllFulfillmentOrdersResult;
        /**
         * One or more unexpected errors occurred during the listAllFulfillmentOrders operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface ListAllFulfillmentOrdersResult {
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        nextToken?: string;
        /**
         * An array of fulfillment order information.
         */
        fulfillmentOrders?: /* General information about a fulfillment order, including its status. */ FulfillmentOrder[];
    }
    export interface ListCatalogCategoriesResponse {
        /**
         * The payload for the listCatalogCategories operation.
         */
        payload?: ListOfCategories;
        /**
         * One or more unexpected errors occurred during the listCatalogCategories operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface ListCatalogItemsResponse {
        /**
         * The payload for the listCatalogItems operation.
         */
        payload?: ListMatchingItemsResponse;
        /**
         * One or more unexpected errors occurred during the listCatalogItems operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload for the listFinancialEventGroups operation.
     */
    export interface ListFinancialEventGroupsPayload {
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        NextToken?: string;
        FinancialEventGroupList?: /* A list of financial event group information. */ FinancialEventGroupList;
    }
    /**
     * The response schema for the listFinancialEventGroups operation.
     */
    export interface ListFinancialEventGroupsResponse {
        /**
         * The payload for the listFinancialEventGroups operation.
         */
        payload?: /* The payload for the listFinancialEventGroups operation. */ ListFinancialEventGroupsPayload;
        /**
         * One or more unexpected errors occurred during the listFinancialEventGroups operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload for the listFinancialEvents operation.
     */
    export interface ListFinancialEventsPayload {
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        NextToken?: string;
        FinancialEvents?: /* Contains all information related to a financial event. */ FinancialEvents;
    }
    /**
     * The response schema for the listFinancialEvents operation.
     */
    export interface ListFinancialEventsResponse {
        /**
         * The payload for the listFinancialEvents operation.
         */
        payload?: /* The payload for the listFinancialEvents operation. */ ListFinancialEventsPayload;
        /**
         * One or more unexpected errors occurred during the listFinancialEvents operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface ListMatchingItemsResponse {
        Items?: /* A list of items. */ ItemList;
    }
    export type ListOfCategories = Categories[];
    /**
     * The response schema for the listReturnReasonCodes operation.
     */
    export interface ListReturnReasonCodesResponse {
        /**
         * The payload for the listReturnReasonCodes operation.
         */
        payload?: ListReturnReasonCodesResult;
        /**
         * One or more unexpected errors occurred during the listReturnReasonCodes operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface ListReturnReasonCodesResult {
        reasonCodeDetails?: /* An array of return reason code details. */ ReasonCodeDetailsList;
    }
    /**
     * A loan advance, loan payment, or loan refund.
     */
    export interface LoanServicingEvent {
        /**
         * The amount of the loan.
         */
        LoanAmount?: /* A currency type and amount. */ Currency;
        /**
         * The type of event.
         *
         * Possible values:
         *
         * * LoanAdvance
         *
         * * LoanPayment
         *
         * * LoanRefund
         */
        SourceBusinessEventType?: string;
    }
    /**
     * A list of loan servicing events.
     */
    export type LoanServicingEventList = /* A loan advance, loan payment, or loan refund. */ LoanServicingEvent[];
    /**
     * The location where the person, business or institution is located.
     */
    export interface Location {
        stateOrRegion?: /* The state or region where the person, business or institution is located. */ StateOrRegion;
        city?: /* The city. */ City;
        countryCode?: /* The country code. A two-character country code, in ISO 3166-1 alpha-2 format. */ CountryCode;
        postalCode?: /* The zip code or postal code. */ PostalCode;
    }
    export interface LowestPriceType {
        /**
         * Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
         */
        condition: string;
        /**
         * Indicates whether the item is fulfilled by Amazon or by the seller.
         */
        fulfillmentChannel: string;
        /**
         * The value calculated by adding ListingPrice + Shipping - Points.
         */
        LandedPrice: MoneyType;
        /**
         * The price of the item.
         */
        ListingPrice: MoneyType;
        /**
         * The shipping cost.
         */
        Shipping: MoneyType;
        /**
         * The number of Amazon Points offered with the purchase of an item.
         */
        Points?: Points;
    }
    export type LowestPrices = LowestPriceType[];
    /**
     * Detailed information about an Amazon market where a seller can list items for sale and customers can view and purchase items.
     */
    export interface Marketplace {
        /**
         * The encrypted marketplace value.
         */
        id: string;
        /**
         * Marketplace name.
         */
        name: string;
        /**
         * The ISO 3166-1 alpha-2 format country code of the marketplace.
         */
        countryCode: string; // ^([A-Z]{2})$
        /**
         * The ISO 4217 format currency code of the marketplace.
         */
        defaultCurrencyCode: string;
        /**
         * The ISO 639-1 format language code of the marketplace.
         */
        defaultLanguageCode: string;
        /**
         * The domain name of the marketplace.
         */
        domainName: string;
    }
    /**
     * A marketplace identifier.
     */
    export type MarketplaceId = string;
    export interface MarketplaceParticipation {
        marketplace: /* Detailed information about an Amazon market where a seller can list items for sale and customers can view and purchase items. */ Marketplace;
        participation: /* Detailed information that is specific to a seller in a Marketplace. */ Participation;
    }
    /**
     * List of marketplace participations.
     */
    export type MarketplaceParticipationList = MarketplaceParticipation[];
    /**
     * A simple object containing the name of the template.
     */
    export interface MessagingAction {
        name: string;
    }
    /**
     * An amount of money, including units in the form of currency.
     */
    export interface Money {
        /**
         * Three digit currency code in ISO 4217 format.
         */
        currencyCode: string;
        value: /* A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. */ Decimal;
    }
    export interface MoneyType {
        /**
         * The currency code in ISO 4217 format.
         */
        currencyCode?: string;
        /**
         * The monetary value.
         */
        amount?: number;
    }
    /**
     * A network commingling transaction event.
     */
    export interface NetworkComminglingTransactionEvent {
        /**
         * The type of network item swap.
         *
         * Possible values:
         *
         * * NetCo - A Fulfillment by Amazon inventory pooling transaction. Available only in the India marketplace.
         *
         * * ComminglingVAT - A commingling VAT transaction. Available only in the UK, Spain, France, Germany, and Italy marketplaces.
         */
        TransactionType?: string;
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * The identifier for the network item swap.
         */
        NetCoTransactionID?: string;
        /**
         * The reason for the network item swap.
         */
        SwapReason?: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the swapped item.
         */
        ASIN?: string;
        /**
         * The marketplace in which the event took place.
         */
        MarketplaceId?: string;
        /**
         * The price of the swapped item minus TaxAmount.
         */
        TaxExclusiveAmount?: /* A currency type and amount. */ Currency;
        /**
         * The tax on the network item swap paid by the seller.
         */
        TaxAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of network commingling transaction events.
     */
    export type NetworkComminglingTransactionEventList = /* A network commingling transaction event. */ NetworkComminglingTransactionEvent[];
    /**
     * Information that you provide to Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by a carrier that has not partnered with Amazon.
     */
    export interface NonPartneredLtlDataInput {
        /**
         * The carrier that you are using for the inbound shipment.
         */
        CarrierName: string;
        ProNumber: /* The PRO number ("progressive number" or "progressive ID") assigned to the shipment by the carrier. */ ProNumber;
    }
    /**
     * Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment shipped by a carrier that has not partnered with Amazon.
     */
    export interface NonPartneredLtlDataOutput {
        /**
         * The carrier that you are using for the inbound shipment.
         */
        CarrierName: string;
        ProNumber: /* The PRO number ("progressive number" or "progressive ID") assigned to the shipment by the carrier. */ ProNumber;
    }
    /**
     * Information that you provide to Amazon about a Small Parcel shipment shipped by a carrier that has not partnered with Amazon.
     */
    export interface NonPartneredSmallParcelDataInput {
        /**
         * The carrier that you are using for the inbound shipment.
         */
        CarrierName: string;
        PackageList: /* A list of package tracking information. */ NonPartneredSmallParcelPackageInputList;
    }
    /**
     * Information returned by Amazon about a Small Parcel shipment by a carrier that has not partnered with Amazon.
     */
    export interface NonPartneredSmallParcelDataOutput {
        PackageList: /* A list of packages, including carrier, tracking number, and status information for each package. */ NonPartneredSmallParcelPackageOutputList;
    }
    /**
     * The tracking number of the package, provided by the carrier.
     */
    export interface NonPartneredSmallParcelPackageInput {
        TrackingId: /* The tracking number of the package, provided by the carrier. */ TrackingId;
    }
    /**
     * A list of package tracking information.
     */
    export type NonPartneredSmallParcelPackageInputList = /* The tracking number of the package, provided by the carrier. */ NonPartneredSmallParcelPackageInput[];
    /**
     * Carrier, tracking number, and status information for the package.
     */
    export interface NonPartneredSmallParcelPackageOutput {
        /**
         * The carrier that you are using for the inbound shipment.
         */
        CarrierName: string;
        TrackingId: /* The tracking number of the package, provided by the carrier. */ TrackingId;
        PackageStatus: /* The shipment status of the package. */ PackageStatus;
    }
    /**
     * A list of packages, including carrier, tracking number, and status information for each package.
     */
    export type NonPartneredSmallParcelPackageOutputList = /* Carrier, tracking number, and status information for the package. */ NonPartneredSmallParcelPackageOutput[];
    /**
     * A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller.
     */
    export type NotificationEmailList = string[];
    /**
     * The number of active offer listings for the item that was submitted. The listing count is returned by condition, one for each listing condition value that is returned. Possible listing condition values are: Any, New, Used, Collectible, Refurbished, or Club.
     */
    export type NumberOfOfferListingsList = /* The number of offer listings with the specified condition. */ OfferListingCountType[];
    export type NumberOfOffers = /* The total number of offers for the specified condition and fulfillment channel. */ OfferCountType[];
    /**
     * The total number of offers for the specified condition and fulfillment channel.
     */
    export interface OfferCountType {
        /**
         * Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
         */
        condition?: string;
        /**
         * Indicates whether the item is fulfilled by Amazon or by the seller.
         */
        fulfillmentChannel?: /* Indicates whether the item is fulfilled by Amazon or by the seller (merchant). */ FulfillmentChannelType;
        /**
         * The number of offers in a fulfillment channel that meet a specific condition.
         */
        OfferCount?: number; // int32
    }
    export interface OfferDetail {
        /**
         * When true, this is the seller's offer.
         */
        MyOffer?: boolean;
        /**
         * The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
         */
        SubCondition: string;
        /**
         * Information about the seller's feedback, including the percentage of positive feedback, and the total number of ratings received.
         */
        SellerFeedbackRating?: /* Information about the seller's feedback, including the percentage of positive feedback, and the total number of ratings received. */ SellerFeedbackType;
        /**
         * The maximum time within which the item will likely be shipped once an order has been placed.
         */
        ShippingTime: /* The time range in which an item will likely be shipped once an order has been placed. */ DetailedShippingTimeType;
        /**
         * The price of the item.
         */
        ListingPrice: MoneyType;
        /**
         * The number of Amazon Points offered with the purchase of an item.
         */
        Points?: Points;
        /**
         * The shipping cost.
         */
        Shipping: MoneyType;
        /**
         * The state and country from where the item is shipped.
         */
        ShipsFrom?: /* The state and country from where the item is shipped. */ ShipsFromType;
        /**
         * When true, the offer is fulfilled by Amazon.
         */
        IsFulfilledByAmazon: boolean;
        /**
         * When true, the offer is currently in the Buy Box. There can be up to two Buy Box winners at any time per ASIN, one that is eligible for Prime and one that is not eligible for Prime.
         */
        IsBuyBoxWinner?: boolean;
        /**
         * When true, the seller of the item is eligible to win the Buy Box.
         */
        IsFeaturedMerchant?: boolean;
    }
    export type OfferDetailList = OfferDetail[];
    /**
     * The number of offer listings with the specified condition.
     */
    export interface OfferListingCountType {
        /**
         * The number of offer listings.
         */
        Count: number; // int32
        /**
         * The condition of the item.
         */
        condition: string;
    }
    export interface OfferType {
        /**
         * Contains pricing information that includes promotions and contains the shipping cost.
         */
        BuyingPrice: PriceType;
        /**
         * The current price excluding any promotions that apply to the product. Excludes the shipping cost.
         */
        RegularPrice: MoneyType;
        /**
         * The fulfillment channel for the offer listing. Possible values:
         *
         * * Amazon - Fulfilled by Amazon.
         * * Merchant - Fulfilled by the seller.
         */
        FulfillmentChannel: string;
        /**
         * The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club.
         */
        ItemCondition: string;
        /**
         * The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
         */
        ItemSubCondition: string;
        /**
         * The seller stock keeping unit (SKU) of the item.
         */
        SellerSKU: string;
    }
    /**
     * A list of offers.
     */
    export type OffersList = OfferType[];
    /**
     * Order information.
     */
    export interface Order {
        /**
         * An Amazon-defined order identifier, in 3-7-7 format.
         */
        AmazonOrderId: string;
        /**
         * A seller-defined order identifier.
         */
        SellerOrderId?: string;
        /**
         * The date when the order was created.
         */
        PurchaseDate: string;
        /**
         * The date when the order was last updated.
         *
         * Note: LastUpdateDate is returned with an incorrect date for orders that were last updated before 2009-04-01.
         */
        LastUpdateDate: string;
        /**
         * The current order status.
         */
        OrderStatus: "Pending" | "Unshipped" | "PartiallyShipped" | "Shipped" | "Canceled" | "Unfulfillable" | "InvoiceUnconfirmed" | "PendingAvailability";
        /**
         * Whether the order was fulfilled by Amazon (AFN) or by the seller (MFN).
         */
        FulfillmentChannel?: "MFN" | "AFN";
        /**
         * The sales channel of the first item in the order.
         */
        SalesChannel?: string;
        /**
         * The order channel of the first item in the order.
         */
        OrderChannel?: string;
        /**
         * The shipment service level of the order.
         */
        ShipServiceLevel?: string;
        /**
         * The total charge for this order.
         */
        OrderTotal?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The number of items shipped.
         */
        NumberOfItemsShipped?: number;
        /**
         * The number of items unshipped.
         */
        NumberOfItemsUnshipped?: number;
        /**
         * Information about sub-payment methods for a Cash On Delivery (COD) order.
         *
         * Note: For a COD order that is paid for using one sub-payment method, one PaymentExecutionDetailItem object is returned, with PaymentExecutionDetailItem/PaymentMethod = COD. For a COD order that is paid for using multiple sub-payment methods, two or more PaymentExecutionDetailItem objects are returned.
         */
        PaymentExecutionDetail?: /* A list of payment execution detail items. */ PaymentExecutionDetailItemList;
        /**
         * The payment method for the order. This property is limited to Cash On Delivery (COD) and Convenience Store (CVS) payment methods. Unless you need the specific COD payment information provided by the PaymentExecutionDetailItem object, we recommend using the PaymentMethodDetails property to get payment method information.
         */
        PaymentMethod?: "COD" | "CVS" | "Other";
        /**
         * A list of payment methods for the order.
         */
        PaymentMethodDetails?: /* A list of payment method detail items. */ PaymentMethodDetailItemList;
        /**
         * The identifier for the marketplace where the order was placed.
         */
        MarketplaceId?: string;
        /**
         * The shipment service level category of the order.
         *
         * Possible values: Expedited, FreeEconomy, NextDay, SameDay, SecondDay, Scheduled, Standard.
         */
        ShipmentServiceLevelCategory?: string;
        /**
         * The status of the Amazon Easy Ship order. This property is included only for Amazon Easy Ship orders.
         *
         * Possible values: PendingPickUp, LabelCanceled, PickedUp, OutForDelivery, Damaged, Delivered, RejectedByBuyer, Undeliverable, ReturnedToSeller, ReturningToSeller.
         */
        EasyShipShipmentStatus?: string;
        /**
         * Custom ship label for Checkout by Amazon (CBA).
         */
        CbaDisplayableShippingLabel?: string;
        /**
         * The type of the order.
         */
        OrderType?: "StandardOrder" | "LongLeadTimeOrder" | "Preorder" | "BackOrder" | "SourcingOnDemandOrder";
        /**
         * The start of the time period within which you have committed to ship the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.
         *
         * Note: EarliestShipDate might not be returned for orders placed before February 1, 2013.
         */
        EarliestShipDate?: string;
        /**
         * The end of the time period within which you have committed to ship the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.
         *
         * Note: LatestShipDate might not be returned for orders placed before February 1, 2013.
         */
        LatestShipDate?: string;
        /**
         * The start of the time period within which you have committed to fulfill the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.
         */
        EarliestDeliveryDate?: string;
        /**
         * The end of the time period within which you have committed to fulfill the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders that do not have a PendingAvailability, Pending, or Canceled status.
         */
        LatestDeliveryDate?: string;
        /**
         * When true, the order is an Amazon Business order. An Amazon Business order is an order where the buyer is a Verified Business Buyer.
         */
        IsBusinessOrder?: boolean;
        /**
         * When true, the order is a seller-fulfilled Amazon Prime order.
         */
        IsPrime?: boolean;
        /**
         * When true, the order has a Premium Shipping Service Level Agreement. For more information about Premium Shipping orders, see "Premium Shipping Options" in the Seller Central Help for your marketplace.
         */
        IsPremiumOrder?: boolean;
        /**
         * When true, the order is a GlobalExpress order.
         */
        IsGlobalExpressEnabled?: boolean;
        /**
         * The order ID value for the order that is being replaced. Returned only if IsReplacementOrder = true.
         */
        ReplacedOrderId?: string;
        /**
         * When true, this is a replacement order.
         */
        IsReplacementOrder?: boolean;
        /**
         * Indicates the date by which the seller must respond to the buyer with an estimated ship date. Returned only for Sourcing on Demand orders.
         */
        PromiseResponseDueDate?: string;
        /**
         * When true, the estimated ship date is set for the order. Returned only for Sourcing on Demand orders.
         */
        IsEstimatedShipDateSet?: boolean;
        /**
         * When true, the item within this order was bought and re-sold by Amazon Business EU SARL (ABEU). By buying and instantly re-selling your items, ABEU becomes the seller of record, making your inventory available for sale to customers who would not otherwise purchase from a third-party seller.
         */
        IsSoldByAB?: boolean;
        /**
         * The recommended location for the seller to ship the items from. It is calculated at checkout. The seller may or may not choose to ship from this location.
         */
        AssignedShipFromLocationAddress?: Address;
        /**
         * Contains the instructions about the fulfillment like where should it be fulfilled from.
         */
        FulfillmentInstruction?: /* Contains the instructions about the fulfillment like where should it be fulfilled from. */ FulfillmentInstruction;
    }
    /**
     * The shipping address for the order.
     */
    export interface OrderAddress {
        /**
         * An Amazon-defined order identifier, in 3-7-7 format.
         */
        AmazonOrderId: string;
        ShippingAddress?: Address;
    }
    /**
     * Buyer information for an order.
     */
    export interface OrderBuyerInfo {
        /**
         * An Amazon-defined order identifier, in 3-7-7 format.
         */
        AmazonOrderId: string;
        /**
         * The anonymized email address of the buyer.
         */
        BuyerEmail?: string;
        /**
         * The name of the buyer.
         */
        BuyerName?: string;
        /**
         * The county of the buyer.
         */
        BuyerCounty?: string;
        /**
         * Tax information about the buyer.
         */
        BuyerTaxInfo?: /* Tax information about the buyer. */ BuyerTaxInfo;
        /**
         * The purchase order (PO) number entered by the buyer at checkout. Returned only for orders where the buyer entered a PO number at checkout.
         */
        PurchaseOrderNumber?: string;
    }
    /**
     * The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
     */
    export type OrderId = string;
    /**
     * A single order item.
     */
    export interface OrderItem {
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN: string;
        /**
         * The seller stock keeping unit (SKU) of the item.
         */
        SellerSKU?: string;
        /**
         * An Amazon-defined order item identifier.
         */
        OrderItemId: string;
        /**
         * The name of the item.
         */
        Title?: string;
        /**
         * The number of items in the order.
         */
        QuantityOrdered: number;
        /**
         * The number of items shipped.
         */
        QuantityShipped?: number;
        /**
         * Product information for the item.
         */
        ProductInfo?: /* Product information on the number of items. */ ProductInfoDetail;
        /**
         * The number and value of Amazon Points granted with the purchase of an item.
         */
        PointsGranted?: /* The number of Amazon Points offered with the purchase of an item, and their monetary value. */ PointsGrantedDetail;
        /**
         * The selling price of the order item. Note that an order item is an item and a quantity. This means that the value of ItemPrice is equal to the selling price of the item multiplied by the quantity ordered. Note that ItemPrice excludes ShippingPrice and GiftWrapPrice.
         */
        ItemPrice?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The shipping price of the item.
         */
        ShippingPrice?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The tax on the item price.
         */
        ItemTax?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The tax on the shipping price.
         */
        ShippingTax?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The discount on the shipping price.
         */
        ShippingDiscount?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The tax on the discount on the shipping price.
         */
        ShippingDiscountTax?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The total of all promotional discounts in the offer.
         */
        PromotionDiscount?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The tax on the total of all promotional discounts in the offer.
         */
        PromotionDiscountTax?: /* An amount of money, including units in the form of currency. */ Money;
        PromotionIds?: /* A list of promotion identifiers provided by the seller when the promotions were created. */ PromotionIdList;
        /**
         * The fee charged for COD service.
         */
        CODFee?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The discount on the COD fee.
         */
        CODFeeDiscount?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * When true, the item is a gift.
         */
        IsGift?: boolean;
        /**
         * The condition of the item as described by the seller.
         */
        ConditionNote?: string;
        /**
         * The condition of the item.
         *
         * Possible values: New, Used, Collectible, Refurbished, Preorder, Club.
         */
        ConditionId?: string;
        /**
         * The subcondition of the item.
         *
         * Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, Any, Other.
         */
        ConditionSubtypeId?: string;
        /**
         * The start date of the scheduled delivery window in the time zone of the order destination. In ISO 8601 date time format.
         */
        ScheduledDeliveryStartDate?: string;
        /**
         * The end date of the scheduled delivery window in the time zone of the order destination. In ISO 8601 date time format.
         */
        ScheduledDeliveryEndDate?: string;
        /**
         * Indicates that the selling price is a special price that is available only for Amazon Business orders. For more information about the Amazon Business Seller Program, see the [Amazon Business website](https://www.amazon.com/b2b/info/amazon-business).
         *
         * Possible values: BusinessPrice - A special price that is available only for Amazon Business orders.
         */
        PriceDesignation?: string;
        /**
         * Information about withheld taxes.
         */
        TaxCollection?: /* Information about withheld taxes. */ TaxCollection;
        /**
         * When true, the product type for this item has a serial number.
         *
         * Returned only for Amazon Easy Ship orders.
         */
        SerialNumberRequired?: boolean;
        /**
         * When true, transparency codes are required.
         */
        IsTransparency?: boolean;
        /**
         * The IOSS number of the seller. Sellers selling in the EU will be assigned a unique IOSS number that must be listed on all packages sent to the EU.
         */
        IossNumber?: string;
        /**
         * The category of deemed reseller. This applies to selling partners that are not based in the EU and is used to help them meet the VAT Deemed Reseller tax laws in the EU and UK.
         */
        DeemedResellerCategory?: "IOSS" | "UOSS";
    }
    /**
     * A single order item's buyer information.
     */
    export interface OrderItemBuyerInfo {
        /**
         * An Amazon-defined order item identifier.
         */
        OrderItemId: string;
        /**
         * Buyer information for custom orders from the Amazon Custom program.
         */
        BuyerCustomizedInfo?: /* Buyer information for custom orders from the Amazon Custom program. */ BuyerCustomizedInfoDetail;
        /**
         * The gift wrap price of the item.
         */
        GiftWrapPrice?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The tax on the gift wrap price.
         */
        GiftWrapTax?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * A gift message provided by the buyer.
         */
        GiftMessageText?: string;
        /**
         * The gift wrap level specified by the buyer.
         */
        GiftWrapLevel?: string;
    }
    /**
     * A single order item's buyer information list.
     */
    export type OrderItemBuyerInfoList = /* A single order item's buyer information. */ OrderItemBuyerInfo[];
    /**
     * An Amazon-defined identifier for an individual item in an order.
     */
    export type OrderItemId = string;
    /**
     * A list of order items.
     */
    export type OrderItemList = /* A single order item. */ OrderItem[];
    /**
     * A single order item's buyer information list with the order ID.
     */
    export interface OrderItemsBuyerInfoList {
        OrderItems: /* A single order item's buyer information list. */ OrderItemBuyerInfoList;
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        NextToken?: string;
        /**
         * An Amazon-defined order identifier, in 3-7-7 format.
         */
        AmazonOrderId: string;
    }
    /**
     * The order items list along with the order ID.
     */
    export interface OrderItemsList {
        OrderItems: /* A list of order items. */ OrderItemList;
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        NextToken?: string;
        /**
         * An Amazon-defined order identifier, in 3-7-7 format.
         */
        AmazonOrderId: string;
    }
    /**
     * A list of orders.
     */
    export type OrderList = /* Order information. */ Order[];
    /**
     * Contains order metrics.
     */
    export interface OrderMetricsInterval {
        /**
         * The interval of time based on requested granularity (ex. Hour, Day, etc.) If this is the first or the last interval from the list, it might contain incomplete data if the requested interval doesn't align with the requested granularity (ex. request interval 2018-09-01T02:00:00Z--2018-09-04T19:00:00Z and granularity day will result in Sept 1st UTC day and Sept 4th UTC days having partial data).
         */
        interval: string;
        /**
         * The number of units in orders based on the specified filters.
         */
        unitCount: number;
        /**
         * The number of order items based on the specified filters.
         */
        orderItemCount: number;
        /**
         * The number of orders based on the specified filters.
         */
        orderCount: number;
        /**
         * The average price for an item based on the specified filters. Formula is totalSales/unitCount.
         */
        averageUnitPrice: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The total ordered product sales for all orders based on the specified filters.
         */
        totalSales: /* An amount of money, including units in the form of currency. */ Money;
    }
    /**
     * A set of order metrics, each scoped to a particular time interval.
     */
    export type OrderMetricsList = /* Contains order metrics. */ OrderMetricsInterval[];
    /**
     * A list of orders along with additional information to make subsequent API calls.
     */
    export interface OrdersList {
        Orders: /* A list of orders. */ OrderList;
        /**
         * When present and not empty, pass this string token in the next request to return the next response page.
         */
        NextToken?: string;
        /**
         * A date used for selecting orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. All dates must be in ISO 8601 format.
         */
        LastUpdatedBefore?: string;
        /**
         * A date used for selecting orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in ISO 8601 format.
         */
        CreatedBefore?: string;
    }
    export type PackageDimension = number; // double
    /**
     * The dimensions of a package contained in a shipment.
     */
    export interface PackageDimensions {
        /**
         * The length dimension. If you don't specify PredefinedPackageDimensions, you must specify the Length.
         */
        Length?: PackageDimension /* double */;
        /**
         * The width dimension. If you don't specify PredefinedPackageDimensions, you must specify the Width.
         */
        Width?: PackageDimension /* double */;
        /**
         * The height dimension. If you don't specify PredefinedPackageDimensions, you must specify the Height.
         */
        Height?: PackageDimension /* double */;
        /**
         * The unit of measurement. If you don't specify PredefinedPackageDimensions, you must specify the Unit.
         */
        Unit?: /* The unit of length. */ UnitOfLength;
        PredefinedPackageDimensions?: /**
         * An enumeration of predefined parcel tokens. If you specify a PredefinedPackageDimensions token, you are not obligated to use a branded package from a carrier. For example, if you specify the FedEx_Box_10kg token, you do not have to use that particular package from FedEx. You are only obligated to use a box that matches the dimensions specified by the token.
         *
         * Note: Please note that carriers can have restrictions on the type of package allowed for certain ship methods. Check the carrier website for all details. Example: Flat rate pricing is available when materials are sent by USPS in a USPS-produced Flat Rate Envelope or Box.
         */
        PredefinedPackageDimensions;
    }
    /**
     * The shipment status of the package.
     */
    export type PackageStatus = "SHIPPED" | "IN_TRANSIT" | "DELIVERED" | "CHECKED_IN" | "RECEIVING" | "CLOSED" | "DELETED";
    export interface PackageTrackingDetails {
        /**
         * The package identifier.
         */
        packageNumber: number; // int32
        /**
         * The tracking number for the package.
         */
        trackingNumber?: string;
        /**
         * Link on swiship.com that allows customers to track the package.
         */
        customerTrackingLink?: string;
        /**
         * The name of the carrier.
         */
        carrierCode?: string;
        /**
         * The phone number of the carrier.
         */
        carrierPhoneNumber?: string;
        /**
         * The URL of the carrier’s website.
         */
        carrierURL?: string;
        /**
         * The shipping date for the package.
         */
        shipDate?: Timestamp /* date-time */;
        /**
         * The estimated arrival date.
         */
        estimatedArrivalDate?: Timestamp /* date-time */;
        /**
         * The destination city for the package.
         */
        shipToAddress?: /* Address information for tracking the package. */ TrackingAddress;
        currentStatus?: /* The current delivery status of the package. */ CurrentStatus;
        /**
         * Description corresponding to the CurrentStatus value.
         */
        currentStatusDescription?: string;
        /**
         * The name of the person who signed for the package.
         */
        signedForBy?: string;
        additionalLocationInfo?: /* Additional location information. */ AdditionalLocationInfo;
        trackingEvents?: /* An array of tracking event information. */ TrackingEventList;
    }
    /**
     * The process of returning the results to a request in batches of a defined size called pages. This is done to exercise some control over result size and overall throughput. It's a form of traffic management.
     */
    export interface Pagination {
        /**
         * A generated string used to retrieve the next page of the result. If nextToken is returned, pass the value of nextToken to the next request. If nextToken is not returned, there are no more items to return.
         */
        nextToken?: string;
    }
    /**
     * Pallet information.
     */
    export interface Pallet {
        /**
         * The dimensions of the pallet. Length and width must be 40 inches by 48 inches. Height must be less than or equal to 60 inches.
         */
        Dimensions: /* The dimension values and unit of measurement. */ Dimensions;
        /**
         * The weight of the pallet.
         */
        Weight?: /* The weight of the package. */ Weight;
        /**
         * Indicates whether pallets will be stacked when carrier arrives for pick-up.
         */
        IsStacked: boolean;
    }
    /**
     * A list of pallet information.
     */
    export type PalletList = /* Pallet information. */ Pallet[];
    /**
     * Detailed information that is specific to a seller in a Marketplace.
     */
    export interface Participation {
        isParticipating: boolean;
        /**
         * Specifies if the seller has suspended listings. True if the seller Listing Status is set to Inactive, otherwise False.
         */
        hasSuspendedListings: boolean;
    }
    /**
     * The estimated shipping cost for a shipment using an Amazon-partnered carrier.
     */
    export interface PartneredEstimate {
        /**
         * The amount that the Amazon-partnered carrier will charge to ship the inbound shipment.
         */
        Amount: /* The monetary value. */ Amount;
        /**
         * The date in ISO 8601 date time format by which this estimate must be confirmed. After this date the estimate is no longer valid and cannot be confirmed.
         *
         * Returned only if the TransportStatus value of the inbound shipment is ESTIMATED.
         */
        ConfirmDeadline?: TimeStampStringType /* date-time */;
        /**
         * The date in ISO 8601 date time format after which a confirmed transportation request can no longer be voided. This date is 24 hours after a Small Parcel shipment transportation request is confirmed or one hour after a Less Than Truckload/Full Truckload (LTL/FTL) shipment transportation request is confirmed. After the void deadline passes the seller's account will be charged for the shipping cost.
         *
         * Returned only if the TransportStatus value of the inbound shipment is CONFIRMED.
         */
        VoidDeadline?: TimeStampStringType /* date-time */;
    }
    /**
     * Information that is required by an Amazon-partnered carrier to ship a Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment.
     */
    export interface PartneredLtlDataInput {
        /**
         * Contact information for the person in the seller's organization who is responsible for the shipment. Used by the carrier if they have questions about the shipment.
         */
        Contact?: /* Contact information for the person in the seller's organization who is responsible for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. */ Contact;
        /**
         * The number of boxes in the shipment.
         */
        BoxCount?: UnsignedIntType /* int64 */;
        SellerFreightClass?: /* The freight class of the shipment. For information about determining the freight class, contact the carrier. */ SellerFreightClass;
        /**
         * The date that the shipment will be ready to be picked up by the carrier.
         */
        FreightReadyDate?: DateStringType /* date */;
        PalletList?: /* A list of pallet information. */ PalletList;
        /**
         * The total weight of the shipment.
         */
        TotalWeight?: /* The weight of the package. */ Weight;
        /**
         * The declaration of the total value of the inventory in the shipment.
         */
        SellerDeclaredValue?: /* The monetary value. */ Amount;
    }
    /**
     * Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by an Amazon-partnered carrier.
     */
    export interface PartneredLtlDataOutput {
        /**
         * Contact information for the person in the seller's organization who is responsible for the shipment. Used by the carrier if they have questions about the shipment.
         */
        Contact: /* Contact information for the person in the seller's organization who is responsible for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. */ Contact;
        /**
         * The number of boxes in the shipment.
         */
        BoxCount: UnsignedIntType /* int64 */;
        SellerFreightClass?: /* The freight class of the shipment. For information about determining the freight class, contact the carrier. */ SellerFreightClass;
        /**
         * The date that the shipment will be ready to be picked up by the carrier. Must be in YYYY-MM-DD format.
         */
        FreightReadyDate: DateStringType /* date */;
        PalletList: /* A list of pallet information. */ PalletList;
        /**
         * The total weight of the shipment.
         */
        TotalWeight: /* The weight of the package. */ Weight;
        /**
         * Your declaration of the total value of the inventory in the shipment.
         */
        SellerDeclaredValue?: /* The monetary value. */ Amount;
        /**
         * Estimate by Amazon of the total value of the inventory in the shipment.
         */
        AmazonCalculatedValue?: /* The monetary value. */ Amount;
        /**
         * The estimated date that the shipment will be picked up by the carrier, in YYYY-MM-DD format.
         */
        PreviewPickupDate: DateStringType /* date */;
        /**
         * The estimated date that the shipment will be delivered to an Amazon fulfillment center, in YYYY-MM-DD format.
         */
        PreviewDeliveryDate: DateStringType /* date */;
        /**
         * The freight class of the shipment as estimated by Amazon if you did not include a freight class when you called the putTransportDetails operation.
         */
        PreviewFreightClass: /* The freight class of the shipment. For information about determining the freight class, contact the carrier. */ SellerFreightClass;
        /**
         * A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment.
         */
        AmazonReferenceId: string;
        /**
         * Indicates whether the bill of lading for the shipment is available.
         */
        IsBillOfLadingAvailable: boolean;
        /**
         * The estimated shipping cost using an Amazon-partnered carrier.
         */
        PartneredEstimate?: /* The estimated shipping cost for a shipment using an Amazon-partnered carrier. */ PartneredEstimate;
        /**
         * The carrier for the inbound shipment.
         */
        CarrierName: string;
    }
    /**
     * Information that is required by an Amazon-partnered carrier to ship a Small Parcel inbound shipment.
     */
    export interface PartneredSmallParcelDataInput {
        PackageList?: /* A list of dimensions and weight information for packages. */ PartneredSmallParcelPackageInputList;
        /**
         * The Amazon-partnered carrier to use for the inbound shipment.
         */
        CarrierName?: string;
    }
    /**
     * Information returned by Amazon about a Small Parcel shipment by an Amazon-partnered carrier.
     */
    export interface PartneredSmallParcelDataOutput {
        PackageList: /* A list of packages, including shipping information from the Amazon-partnered carrier. */ PartneredSmallParcelPackageOutputList;
        PartneredEstimate?: /* The estimated shipping cost for a shipment using an Amazon-partnered carrier. */ PartneredEstimate;
    }
    /**
     * Dimension and weight information for the package.
     */
    export interface PartneredSmallParcelPackageInput {
        Dimensions: /* The dimension values and unit of measurement. */ Dimensions;
        Weight: /* The weight of the package. */ Weight;
    }
    /**
     * A list of dimensions and weight information for packages.
     */
    export type PartneredSmallParcelPackageInputList = /* Dimension and weight information for the package. */ PartneredSmallParcelPackageInput[];
    /**
     * Dimension, weight, and shipping information for the package.
     */
    export interface PartneredSmallParcelPackageOutput {
        Dimensions: /* The dimension values and unit of measurement. */ Dimensions;
        Weight: /* The weight of the package. */ Weight;
        /**
         * The carrier specified with a previous call to putTransportDetails.
         */
        CarrierName: string;
        TrackingId: /* The tracking number of the package, provided by the carrier. */ TrackingId;
        PackageStatus: /* The shipment status of the package. */ PackageStatus;
    }
    /**
     * A list of packages, including shipping information from the Amazon-partnered carrier.
     */
    export type PartneredSmallParcelPackageOutputList = /* Dimension, weight, and shipping information for the package. */ PartneredSmallParcelPackageOutput[];
    /**
     * The account related with the shipment.
     */
    export interface Party {
        accountId?: /* This is the Amazon Shipping account id generated during the Amazon Shipping onboarding process. */ AccountId;
    }
    /**
     * An event related to the seller's Pay with Amazon account.
     */
    export interface PayWithAmazonEvent {
        /**
         * An order identifier that is specified by the seller.
         */
        SellerOrderId?: string;
        /**
         * The date and time when the payment transaction is posted. In ISO 8601 date time format.
         */
        TransactionPostedDate?: Date /* date-time */;
        /**
         * The type of business object.
         */
        BusinessObjectType?: string;
        /**
         * The sales channel for the transaction.
         */
        SalesChannel?: string;
        /**
         * The charge associated with the event.
         */
        Charge?: /**
         * A charge on the seller's account.
         *
         * Possible values:
         *
         * * Principal - The selling price of the order item, equal to the selling price of the item multiplied by the quantity ordered.
         *
         * * Tax - The tax collected by the seller on the Principal.
         *
         * * MarketplaceFacilitatorTax-Principal - The tax withheld on the Principal.
         *
         * * MarketplaceFacilitatorTax-Shipping - The tax withheld on the ShippingCharge.
         *
         * * MarketplaceFacilitatorTax-Giftwrap - The tax withheld on the Giftwrap charge.
         *
         * * MarketplaceFacilitatorTax-Other - The tax withheld on other miscellaneous charges.
         *
         * * Discount - The promotional discount for an order item.
         *
         * * TaxDiscount - The tax amount deducted for promotional rebates.
         *
         * * CODItemCharge - The COD charge for an order item.
         *
         * * CODItemTaxCharge - The tax collected by the seller on a CODItemCharge.
         *
         * * CODOrderCharge - The COD charge for an order.
         *
         * * CODOrderTaxCharge - The tax collected by the seller on a CODOrderCharge.
         *
         * * CODShippingCharge - Shipping charges for a COD order.
         *
         * * CODShippingTaxCharge - The tax collected by the seller on a CODShippingCharge.
         *
         * * ShippingCharge - The shipping charge.
         *
         * * ShippingTax - The tax collected by the seller on a ShippingCharge.
         *
         * * Goodwill - The amount given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.
         *
         * * Giftwrap - The gift wrap charge.
         *
         * * GiftwrapTax - The tax collected by the seller on a Giftwrap charge.
         *
         * * RestockingFee - The charge applied to the buyer when returning a product in certain categories.
         *
         * * ReturnShipping - The amount given to the buyer to compensate for shipping the item back in the event we are at fault.
         *
         * * PointsFee - The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.
         *
         * * GenericDeduction - A generic bad debt deduction.
         *
         * * FreeReplacementReturnShipping - The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.
         *
         * * PaymentMethodFee - The fee collected for certain payment methods in certain marketplaces.
         *
         * * ExportCharge - The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.
         *
         * * SAFE-TReimbursement - The SAFE-T claim amount for the item.
         *
         * * TCS-CGST - Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).
         *
         * * TCS-SGST - Tax Collected at Source for State Goods and Services Tax (SGST).
         *
         * * TCS-IGST - Tax Collected at Source for Integrated Goods and Services Tax (IGST).
         *
         * * TCS-UTGST - Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
         */
        ChargeComponent;
        /**
         * A list of fees associated with the event.
         */
        FeeList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * The type of payment.
         *
         * Possible values:
         *
         * * Sales
         */
        PaymentAmountType?: string;
        /**
         * A short description of this payment event.
         */
        AmountDescription?: string;
        /**
         * The fulfillment channel.
         *
         * Possible values:
         *
         * * AFN - Amazon Fulfillment Network (Fulfillment by Amazon)
         *
         * * MFN - Merchant Fulfillment Network (self-fulfilled)
         */
        FulfillmentChannel?: string;
        /**
         * The store name where the event occurred.
         */
        StoreName?: string;
    }
    /**
     * A list of events related to the seller's Pay with Amazon account.
     */
    export type PayWithAmazonEventList = /* An event related to the seller's Pay with Amazon account. */ PayWithAmazonEvent[];
    /**
     * Information about a sub-payment method used to pay for a COD order.
     */
    export interface PaymentExecutionDetailItem {
        Payment: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * A sub-payment method for a COD order.
         *
         * Possible values:
         *
         * * COD - Cash On Delivery.
         *
         * * GC - Gift Card.
         *
         * * PointsAccount - Amazon Points.
         */
        PaymentMethod: string;
    }
    /**
     * A list of payment execution detail items.
     */
    export type PaymentExecutionDetailItemList = /* Information about a sub-payment method used to pay for a COD order. */ PaymentExecutionDetailItem[];
    /**
     * A list of payment method detail items.
     */
    export type PaymentMethodDetailItemList = string[];
    /**
     * The phone number.
     */
    export type PhoneNumber = string;
    /**
     * Proof of Appointment (POA) details.
     */
    export interface Poa {
        /**
         * The time of the appointment window.
         */
        appointmentTime?: /* The time of the appointment window. */ AppointmentTime;
        /**
         * A list of technicians.
         */
        technicians?: /* A technician who is assigned to perform the service job in part or in full. */ Technician[];
        /**
         * The identifier of the technician who uploaded the POA.
         */
        uploadingTechnician?: string; // ^[A-Z0-9]*$
        /**
         * The date and time when the POA was uploaded, in ISO 8601 format.
         */
        uploadTime?: string; // date-time
        /**
         * The type of POA uploaded.
         */
        poaType?: "NO_SIGNATURE_DUMMY_POS" | "CUSTOMER_SIGNATURE" | "DUMMY_RECEIPT" | "POA_RECEIPT";
    }
    export interface Points {
        PointsNumber?: number; // int32
        PointsMonetaryValue?: MoneyType;
    }
    /**
     * The number of Amazon Points offered with the purchase of an item, and their monetary value.
     */
    export interface PointsGrantedDetail {
        /**
         * The number of Amazon Points granted with the purchase of an item.
         */
        PointsNumber?: number;
        /**
         * The monetary value of the Amazon Points granted.
         */
        PointsMonetaryValue?: /* An amount of money, including units in the form of currency. */ Money;
    }
    /**
     * The zip code or postal code.
     */
    export type PostalCode = string;
    /**
     * An enumeration of predefined parcel tokens. If you specify a PredefinedPackageDimensions token, you are not obligated to use a branded package from a carrier. For example, if you specify the FedEx_Box_10kg token, you do not have to use that particular package from FedEx. You are only obligated to use a box that matches the dimensions specified by the token.
     *
     * Note: Please note that carriers can have restrictions on the type of package allowed for certain ship methods. Check the carrier website for all details. Example: Flat rate pricing is available when materials are sent by USPS in a USPS-produced Flat Rate Envelope or Box.
     */
    export type PredefinedPackageDimensions = "FedEx_Box_10kg" | "FedEx_Box_25kg" | "FedEx_Box_Extra_Large_1" | "FedEx_Box_Extra_Large_2" | "FedEx_Box_Large_1" | "FedEx_Box_Large_2" | "FedEx_Box_Medium_1" | "FedEx_Box_Medium_2" | "FedEx_Box_Small_1" | "FedEx_Box_Small_2" | "FedEx_Envelope" | "FedEx_Padded_Pak" | "FedEx_Pak_1" | "FedEx_Pak_2" | "FedEx_Tube" | "FedEx_XL_Pak" | "UPS_Box_10kg" | "UPS_Box_25kg" | "UPS_Express_Box" | "UPS_Express_Box_Large" | "UPS_Express_Box_Medium" | "UPS_Express_Box_Small" | "UPS_Express_Envelope" | "UPS_Express_Hard_Pak" | "UPS_Express_Legal_Envelope" | "UPS_Express_Pak" | "UPS_Express_Tube" | "UPS_Laboratory_Pak" | "UPS_Pad_Pak" | "UPS_Pallet" | "USPS_Card" | "USPS_Flat" | "USPS_FlatRateCardboardEnvelope" | "USPS_FlatRateEnvelope" | "USPS_FlatRateGiftCardEnvelope" | "USPS_FlatRateLegalEnvelope" | "USPS_FlatRatePaddedEnvelope" | "USPS_FlatRateWindowEnvelope" | "USPS_LargeFlatRateBoardGameBox" | "USPS_LargeFlatRateBox" | "USPS_Letter" | "USPS_MediumFlatRateBox1" | "USPS_MediumFlatRateBox2" | "USPS_RegionalRateBoxA1" | "USPS_RegionalRateBoxA2" | "USPS_RegionalRateBoxB1" | "USPS_RegionalRateBoxB2" | "USPS_RegionalRateBoxC" | "USPS_SmallFlatRateBox" | "USPS_SmallFlatRateEnvelope";
    /**
     * Preparation instructions and who is responsible for the preparation.
     */
    export interface PrepDetails {
        PrepInstruction: /* Preparation instructions for shipping an item to Amazon's fulfillment network. For more information about preparing items for shipment to Amazon's fulfillment network, see the Seller Central Help for your marketplace. */ PrepInstruction;
        PrepOwner: /* Indicates who will prepare the item. */ PrepOwner;
    }
    /**
     * A list of preparation instructions and who is responsible for that preparation.
     */
    export type PrepDetailsList = /* Preparation instructions and who is responsible for the preparation. */ PrepDetails[];
    /**
     * Item preparation instructions.
     */
    export type PrepGuidance = "ConsultHelpDocuments" | "NoAdditionalPrepRequired" | "SeePrepInstructionsList";
    /**
     * Preparation instructions for shipping an item to Amazon's fulfillment network. For more information about preparing items for shipment to Amazon's fulfillment network, see the Seller Central Help for your marketplace.
     */
    export type PrepInstruction = "Polybagging" | "BubbleWrapping" | "Taping" | "BlackShrinkWrapping" | "Labeling" | "HangGarment";
    /**
     * A list of preparation instructions to help with item sourcing decisions.
     */
    export type PrepInstructionList = /* Preparation instructions for shipping an item to Amazon's fulfillment network. For more information about preparing items for shipment to Amazon's fulfillment network, see the Seller Central Help for your marketplace. */ PrepInstruction[];
    /**
     * Indicates who will prepare the item.
     */
    export type PrepOwner = "AMAZON" | "SELLER";
    /**
     * The price attribute of the item.
     */
    export interface Price {
        /**
         * The amount.
         */
        Amount?: number;
        /**
         * The currency code of the amount.
         */
        CurrencyCode?: string;
    }
    export type PriceList = /* The price attribute of the item. */ Price[];
    /**
     * Price information for an item, used to estimate fees.
     */
    export interface PriceToEstimateFees {
        /**
         * The price of the item.
         */
        ListingPrice: MoneyType;
        /**
         * The shipping cost.
         */
        Shipping?: MoneyType;
        /**
         * The number of Amazon Points offered with the purchase of an item.
         */
        Points?: Points;
    }
    export interface PriceType {
        /**
         * The value calculated by adding ListingPrice + Shipping - Points. Note that if the landed price is not returned, the listing price represents the product with the lowest landed price.
         */
        LandedPrice?: MoneyType;
        /**
         * The listing price of the item including any promotions that apply.
         */
        ListingPrice: MoneyType;
        /**
         * The shipping cost of the product. Note that the shipping cost is not always available.
         */
        Shipping?: MoneyType;
        /**
         * The number of Amazon Points offered with the purchase of an item, and their monetary value.
         */
        Points?: Points;
    }
    /**
     * The PRO number ("progressive number" or "progressive ID") assigned to the shipment by the carrier.
     */
    export type ProNumber = string;
    /**
     * An item.
     */
    export interface Product {
        Identifiers: IdentifierType;
        AttributeSets?: /* A list of attributes for the item. */ AttributeSetList;
        Relationships?: /* A list of variation relationship information, if applicable for the item. */ RelationshipList;
        CompetitivePricing?: /* Competitive pricing information for the item. */ CompetitivePricingType;
        SalesRankings?: /* A list of sales rank information for the item by category. */ SalesRankList;
        Offers?: /* A list of offers. */ OffersList;
    }
    /**
     * A Sponsored Products payment event.
     */
    export interface ProductAdsPaymentEvent {
        /**
         * The date and time when the financial event was posted.
         */
        postedDate?: Date /* date-time */;
        /**
         * Indicates if the transaction is for a charge or a refund.
         *
         * Possible values:
         *
         * * charge - Charge
         *
         * * refund - Refund
         */
        transactionType?: string;
        /**
         * Identifier for the invoice that the transaction appears in.
         */
        invoiceId?: string;
        /**
         * Base amount of the transaction, before tax.
         */
        baseValue?: /* A currency type and amount. */ Currency;
        /**
         * Tax amount of the transaction.
         */
        taxValue?: /* A currency type and amount. */ Currency;
        /**
         * The total amount of the transaction. Equal to baseValue + taxValue.
         */
        transactionValue?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of sponsored products payment events.
     */
    export type ProductAdsPaymentEventList = /* A Sponsored Products payment event. */ ProductAdsPaymentEvent[];
    /**
     * Product information on the number of items.
     */
    export interface ProductInfoDetail {
        /**
         * The total number of items that are included in the ASIN.
         */
        NumberOfItems?: number;
    }
    /**
     * The promised delivery date and time of a shipment.
     */
    export type PromisedDeliveryDate = string; // date-time
    /**
     * A promotion applied to an item.
     */
    export interface Promotion {
        /**
         * The type of promotion.
         */
        PromotionType?: string;
        /**
         * The seller-specified identifier for the promotion.
         */
        PromotionId?: string;
        /**
         * The amount of promotional discount applied to the item.
         */
        PromotionAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of promotion identifiers provided by the seller when the promotions were created.
     */
    export type PromotionIdList = string[];
    /**
     * A list of promotions.
     */
    export type PromotionList = /* A promotion applied to an item. */ Promotion[];
    /**
     * The request schema for the purchaseLabels operation.
     */
    export interface PurchaseLabelsRequest {
        rateId: /* An identifier for the rating. */ RateId;
        labelSpecification: /* The label specification info. */ LabelSpecification;
    }
    /**
     * The response schema for the purchaseLabels operation.
     */
    export interface PurchaseLabelsResponse {
        /**
         * The payload for purchaseLabels operation
         */
        payload?: /* The payload schema for the purchaseLabels operation. */ PurchaseLabelsResult;
        /**
         * Encountered errors for the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload schema for the purchaseLabels operation.
     */
    export interface PurchaseLabelsResult {
        shipmentId: /* An Amazon-defined shipment identifier. */ ShipmentId;
        clientReferenceId?: /* Client reference id. */ ClientReferenceId;
        acceptedRate: /* The specific rate purchased for the shipment, or null if unpurchased. */ AcceptedRate;
        labelResults: /* A list of label results */ LabelResultList;
    }
    /**
     * The payload schema for the purchaseShipment operation.
     */
    export interface PurchaseShipmentRequest {
        clientReferenceId: /* Client reference id. */ ClientReferenceId;
        shipTo: Address;
        shipFrom: Address;
        /**
         * The start date and time. This defaults to the current date and time.
         */
        shipDate?: string; // date-time
        serviceType: /* The type of shipping service that will be used for the service offering. */ ServiceType;
        containers: /* A list of container. */ ContainerList;
        labelSpecification: /* The label specification info. */ LabelSpecification;
    }
    /**
     * The response schema for the purchaseShipment operation.
     */
    export interface PurchaseShipmentResponse {
        /**
         * The payload for purchaseShipment operation
         */
        payload?: /* The payload schema for the purchaseShipment operation. */ PurchaseShipmentResult;
        /**
         * Encountered errors for the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload schema for the purchaseShipment operation.
     */
    export interface PurchaseShipmentResult {
        shipmentId: /* An Amazon-defined shipment identifier. */ ShipmentId;
        serviceRate: /* The specific rate for a shipping service, or null if no service available. */ ServiceRate;
        labelResults: /* A list of label results */ LabelResultList;
    }
    /**
     * The request schema for a putTransportDetails operation.
     */
    export interface PutTransportDetailsRequest {
        /**
         * Indicates whether a putTransportDetails request is for an Amazon-partnered carrier.
         */
        IsPartnered: boolean;
        ShipmentType: /* Specifies the carrier shipment type in a putTransportDetails request. */ ShipmentType;
        /**
         * Information required to create an Amazon-partnered carrier shipping estimate, or to alert the Amazon fulfillment center to the arrival of an inbound shipment by a non-Amazon-partnered carrier.
         */
        TransportDetails: /* Information required to create an Amazon-partnered carrier shipping estimate, or to alert the Amazon fulfillment center to the arrival of an inbound shipment by a non-Amazon-partnered carrier. */ TransportDetailInput;
    }
    /**
     * Workflow status for a shipment with an Amazon-partnered carrier.
     */
    export interface PutTransportDetailsResponse {
        /**
         * The payload for the putTransportDetails operation.
         */
        payload?: CommonTransportResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    export interface QualifiersType {
        /**
         * The condition of the item. Possible values: New, Used, Collectible, Refurbished, or Club.
         */
        ItemCondition: string;
        /**
         * The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
         */
        ItemSubcondition: string;
        /**
         * The fulfillment channel for the item. Possible values:
         *
         * * Amazon - Fulfilled by Amazon.
         * * Merchant - Fulfilled by the seller.
         */
        FulfillmentChannel: string;
        /**
         * Indicates whether the marketplace specified in the request and the location that the item ships from are in the same country. Possible values: True, False, or Unknown.
         */
        ShipsDomestically: string;
        /**
         * (0-2 days, 3-7 days, 8-13 days, or 14 or more days) – Indicates the maximum time within which the item will likely be shipped once an order has been placed.
         */
        ShippingTime: ShippingTimeType;
        /**
         * (98-100%, 95-97%, 90-94%, 80-89%, 70-79%, Less than 70%, or Just launched ) – Indicates the percentage of feedback ratings that were positive over the past 12 months.
         */
        SellerPositiveFeedbackRating: string;
    }
    /**
     * The item quantity.
     */
    export type Quantity = number; // int32
    /**
     * The available rate that can be used to send the shipment
     */
    export interface Rate {
        /**
         * An identifier for the rate.
         */
        rateId?: string;
        /**
         * The total charge that will be billed for the rate.
         */
        totalCharge?: /* A currency type and amount. */ Currency;
        /**
         * The weight that was used to calculate the totalCharge.
         */
        billedWeight?: /* The weight of the package. */ Weight;
        /**
         * The time after which the offering will expire.
         */
        expirationTime?: string; // date-time
        serviceType?: /* The type of shipping service that will be used for the service offering. */ ServiceType;
        promise?: /* The promised delivery time and pickup time. */ ShippingPromiseSet;
    }
    /**
     * An identifier for the rating.
     */
    export type RateId = string;
    /**
     * A list of all the available rates that can be used to send the shipment.
     */
    export type RateList = /* The available rate that can be used to send the shipment */ Rate[];
    /**
     * A return reason code, a description, and an optional description translation.
     */
    export interface ReasonCodeDetails {
        /**
         * A code that indicates a valid return reason.
         */
        returnReasonCode: string;
        /**
         * A human readable description of the return reason code.
         */
        description: string;
        /**
         * A translation of the description. The translation is in the language specified in the Language request parameter.
         */
        translatedDescription?: string;
    }
    /**
     * An array of return reason code details.
     */
    export type ReasonCodeDetailsList = /* A return reason code, a description, and an optional description translation. */ ReasonCodeDetails[];
    /**
     * Information about a rejected shipping service
     */
    export interface RejectedShippingService {
        /**
         * The rejected shipping carrier name. e.g. USPS
         */
        CarrierName: string;
        /**
         * The rejected shipping service localized name. e.g. FedEx Standard Overnight
         */
        ShippingServiceName: string;
        /**
         * The rejected shipping service identifier. e.g. FEDEX_PTP_STANDARD_OVERNIGHT
         */
        ShippingServiceId: /* An Amazon-defined shipping service identifier. */ ShippingServiceIdentifier;
        /**
         * A reason code meant to be consumed programatically. e.g. CARRIER_CANNOT_SHIP_TO_POBOX
         */
        RejectionReasonCode: string;
        /**
         * A localized human readable description of the rejected reason.
         */
        RejectionReasonMessage?: string;
    }
    /**
     * List of services that were for some reason unavailable for this request
     */
    export type RejectedShippingServiceList = /* Information about a rejected shipping service */ RejectedShippingService[];
    /**
     * A list of variation relationship information, if applicable for the item.
     */
    export type RelationshipList = /* Specific variations of the item. */ RelationshipType[];
    /**
     * Specific variations of the item.
     */
    export interface RelationshipType {
        /**
         * The color variation of the item.
         */
        Color?: string;
        /**
         * The edition variation of the item.
         */
        Edition?: string;
        /**
         * The flavor variation of the item.
         */
        Flavor?: string;
        /**
         * The gem type variations of the item.
         */
        GemType?: string[];
        /**
         * The golf club flex variation of an item.
         */
        GolfClubFlex?: string;
        /**
         * The hand orientation variation of an item.
         */
        HandOrientation?: string;
        /**
         * The hardware platform variation of an item.
         */
        HardwarePlatform?: string;
        /**
         * The material type variations of an item.
         */
        MaterialType?: string[];
        /**
         * The metal type variation of an item.
         */
        MetalType?: string;
        /**
         * The model variation of an item.
         */
        Model?: string;
        /**
         * The operating system variations of an item.
         */
        OperatingSystem?: string[];
        /**
         * The product type subcategory variation of an item.
         */
        ProductTypeSubcategory?: string;
        /**
         * The ring size variation of an item.
         */
        RingSize?: string;
        /**
         * The shaft material variation of an item.
         */
        ShaftMaterial?: string;
        /**
         * The scent variation of an item.
         */
        Scent?: string;
        /**
         * The size variation of an item.
         */
        Size?: string;
        /**
         * The size per pearl variation of an item.
         */
        SizePerPearl?: string;
        /**
         * The golf club loft variation of an item.
         */
        GolfClubLoft?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The total diamond weight variation of an item.
         */
        TotalDiamondWeight?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The total gem weight variation of an item.
         */
        TotalGemWeight?: /* The decimal value and unit. */ DecimalWithUnits;
        /**
         * The package quantity variation of an item.
         */
        PackageQuantity?: number;
        /**
         * The item dimensions relationship of an item.
         */
        ItemDimensions?: /* The dimension type attribute of an item. */ DimensionType;
    }
    /**
     * A removal shipment event for a removal order.
     */
    export interface RemovalShipmentEvent {
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * The identifier for the removal shipment order.
         */
        OrderId?: string;
        /**
         * The type of removal order.
         *
         * Possible values:
         *
         * * WHOLESALE_LIQUIDATION
         */
        TransactionType?: string;
        /**
         * A list of removal shipment items.
         */
        RemovalShipmentItemList?: /* A list of information about removal shipment items. */ RemovalShipmentItemList;
    }
    /**
     * A list of removal shipment event information.
     */
    export type RemovalShipmentEventList = /* A removal shipment event for a removal order. */ RemovalShipmentEvent[];
    /**
     * Item-level information for a removal shipment.
     */
    export interface RemovalShipmentItem {
        /**
         * An identifier for an item in a removal shipment.
         */
        RemovalShipmentItemId?: string;
        /**
         * The tax collection model applied to the item.
         *
         * Possible values:
         *
         * * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.
         *
         * * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
         */
        TaxCollectionModel?: string;
        /**
         * The Amazon fulfillment network SKU for the item.
         */
        FulfillmentNetworkSKU?: string;
        /**
         * The quantity of the item.
         */
        Quantity?: number; // int32
        /**
         * The total amount paid to the seller for the removed item.
         */
        Revenue?: /* A currency type and amount. */ Currency;
        /**
         * The fee that Amazon charged to the seller for the removal of the item. The amount is a negative number.
         */
        FeeAmount?: /* A currency type and amount. */ Currency;
        /**
         * Tax collected on the revenue.
         */
        TaxAmount?: /* A currency type and amount. */ Currency;
        /**
         * The tax withheld and remitted to the taxing authority by Amazon on behalf of the seller. If TaxCollectionModel=MarketplaceFacilitator, then TaxWithheld=TaxAmount (except the TaxWithheld amount is a negative number). Otherwise TaxWithheld=0.
         */
        TaxWithheld?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of information about removal shipment items.
     */
    export type RemovalShipmentItemList = /* Item-level information for a removal shipment. */ RemovalShipmentItem[];
    /**
     * An event related to a rental transaction.
     */
    export interface RentalTransactionEvent {
        /**
         * An Amazon-defined identifier for an order.
         */
        AmazonOrderId?: string;
        /**
         * The type of rental event.
         *
         * Possible values:
         *
         * * RentalCustomerPayment-Buyout - Transaction type that represents when the customer wants to buy out a rented item.
         *
         * * RentalCustomerPayment-Extension - Transaction type that represents when the customer wants to extend the rental period.
         *
         * * RentalCustomerRefund-Buyout - Transaction type that represents when the customer requests a refund for the buyout of the rented item.
         *
         * * RentalCustomerRefund-Extension - Transaction type that represents when the customer requests a refund over the extension on the rented item.
         *
         * * RentalHandlingFee - Transaction type that represents the fee that Amazon charges sellers who rent through Amazon.
         *
         * * RentalChargeFailureReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a failed charge.
         *
         * * RentalLostItemReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a lost item.
         */
        RentalEventType?: string;
        /**
         * The number of days that the buyer extended an already rented item. This value is only returned for RentalCustomerPayment-Extension and RentalCustomerRefund-Extension events.
         */
        ExtensionLength?: number; // int32
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * A list of charges associated with the rental event.
         */
        RentalChargeList?: /* A list of charge information on the seller's account. */ ChargeComponentList;
        /**
         * A list of fees associated with the rental event.
         */
        RentalFeeList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * The name of the marketplace.
         */
        MarketplaceName?: string;
        /**
         * The amount of money the customer originally paid to rent the item. This value is only returned for RentalChargeFailureReimbursement and RentalLostItemReimbursement events.
         */
        RentalInitialValue?: /* A currency type and amount. */ Currency;
        /**
         * The amount of money Amazon sends the seller to compensate for a lost item or a failed charge. This value is only returned for RentalChargeFailureReimbursement and RentalLostItemReimbursement events.
         */
        RentalReimbursement?: /* A currency type and amount. */ Currency;
        /**
         * A list of taxes withheld information for a rental item.
         */
        RentalTaxWithheldList?: /* A list of information about taxes withheld. */ TaxWithheldComponentList;
    }
    /**
     * A list of rental transaction event information.
     */
    export type RentalTransactionEventList = /* An event related to a rental transaction. */ RentalTransactionEvent[];
    export interface Report {
        /**
         * A list of marketplace identifiers for the report.
         */
        marketplaceIds?: string[];
        /**
         * The identifier for the report. This identifier is unique only in combination with a seller ID.
         */
        reportId: string;
        /**
         * The report type.
         */
        reportType: string;
        /**
         * The start of a date and time range used for selecting the data to report.
         */
        dataStartTime?: string; // date-time
        /**
         * The end of a date and time range used for selecting the data to report.
         */
        dataEndTime?: string; // date-time
        /**
         * The identifier of the report schedule that created this report (if any). This identifier is unique only in combination with a seller ID.
         */
        reportScheduleId?: string;
        /**
         * The date and time when the report was created.
         */
        createdTime: string; // date-time
        /**
         * The processing status of the report.
         */
        processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
        /**
         * The date and time when the report processing started, in ISO 8601 date time format.
         */
        processingStartTime?: string; // date-time
        /**
         * The date and time when the report processing completed, in ISO 8601 date time format.
         */
        processingEndTime?: string; // date-time
        /**
         * The identifier for the report document. Pass this into the getReportDocument operation to get the information you will need to retrieve and decrypt the report document's contents.
         */
        reportDocumentId?: string;
    }
    export interface ReportDocument {
        /**
         * The identifier for the report document. This identifier is unique only in combination with a seller ID.
         */
        reportDocumentId: string;
        /**
         * A presigned URL for the report document. This URL expires after 5 minutes.
         */
        url: string;
        encryptionDetails: /* Encryption details required for decryption of a report document's contents. */ ReportDocumentEncryptionDetails;
        /**
         * If present, the report document contents have been compressed with the provided algorithm.
         */
        compressionAlgorithm?: "GZIP";
    }
    /**
     * Encryption details required for decryption of a report document's contents.
     */
    export interface ReportDocumentEncryptionDetails {
        /**
         * The encryption standard required to decrypt the document contents.
         */
        standard: "AES";
        /**
         * The vector to decrypt the document contents using Cipher Block Chaining (CBC).
         */
        initializationVector: string;
        /**
         * The encryption key used to decrypt the document contents.
         */
        key: string;
    }
    export type ReportList = Report[];
    /**
     * Additional information passed to reports. This varies by report type.
     */
    export interface ReportOptions {
        [name: string]: string;
    }
    /**
     * Detailed information about a report schedule.
     */
    export interface ReportSchedule {
        /**
         * The identifier for the report schedule. This identifier is unique only in combination with a seller ID.
         */
        reportScheduleId: string;
        /**
         * The report type.
         */
        reportType: string;
        /**
         * A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
         */
        marketplaceIds?: string[];
        reportOptions?: /* Additional information passed to reports. This varies by report type. */ ReportOptions;
        /**
         * An ISO 8601 period value that indicates how often a report should be created.
         */
        period: string;
        /**
         * The date and time when the schedule will create its next report, in ISO 8601 date time format.
         */
        nextReportCreationTime?: string; // date-time
    }
    export type ReportScheduleList = /* Detailed information about a report schedule. */ ReportSchedule[];
    /**
     * Input for rescheduled appointment operation.
     */
    export interface RescheduleAppointmentRequest {
        /**
         * Input appointment time details.
         */
        appointmentTime: /* The input appointment time details. */ AppointmentTimeInput;
        /**
         * Input appointment reschedule reason.
         */
        rescheduleReasonCode: /* Appointment reschedule reason code. */ RescheduleReasonCode;
    }
    /**
     * Appointment reschedule reason code.
     */
    export type RescheduleReasonCode = string;
    /**
     * The number of misplaced or warehouse damaged units that are actively being confirmed at our fulfillment centers.
     */
    export interface ResearchingQuantity {
        /**
         * The total number of units currently being researched in Amazon's fulfillment network.
         */
        totalResearchingQuantity?: number;
        /**
         * A list of quantity details for items currently being researched.
         */
        researchingQuantityBreakdown?: /* The misplaced or warehouse damaged inventory that is actively being confirmed at our fulfillment centers. */ ResearchingQuantityEntry[];
    }
    /**
     * The misplaced or warehouse damaged inventory that is actively being confirmed at our fulfillment centers.
     */
    export interface ResearchingQuantityEntry {
        /**
         * The duration of the research.
         */
        name: "researchingQuantityInShortTerm" | "researchingQuantityInMidTerm" | "researchingQuantityInLongTerm";
        /**
         * The number of units.
         */
        quantity: number;
    }
    /**
     * The quantity of reserved inventory.
     */
    export interface ReservedQuantity {
        /**
         * The total number of units in Amazon's fulfillment network that are currently being picked, packed, and shipped; or are sidelined for measurement, sampling, or other internal processes.
         */
        totalReservedQuantity?: number;
        /**
         * The number of units reserved for customer orders.
         */
        pendingCustomerOrderQuantity?: number;
        /**
         * The number of units being transferred from one fulfillment center to another.
         */
        pendingTransshipmentQuantity?: number;
        /**
         * The number of units that have been sidelined at the fulfillment center for additional processing.
         */
        fcProcessingQuantity?: number;
    }
    /**
     * The set of fixed values in an additional seller input.
     */
    export type RestrictedSetValues = string[];
    /**
     * The request schema for the retrieveShippingLabel operation.
     */
    export interface RetrieveShippingLabelRequest {
        labelSpecification: /* The label specification info. */ LabelSpecification;
    }
    /**
     * The response schema for the retrieveShippingLabel operation.
     */
    export interface RetrieveShippingLabelResponse {
        /**
         * The payload for retrieveShippingLabel operation
         */
        payload?: /* The payload schema for the retrieveShippingLabel operation. */ RetrieveShippingLabelResult;
        /**
         * Encountered errors for the operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The payload schema for the retrieveShippingLabel operation.
     */
    export interface RetrieveShippingLabelResult {
        labelStream: /* Contains binary image data encoded as a base-64 string. */ LabelStream;
        labelSpecification: /* The label specification info. */ LabelSpecification;
    }
    /**
     * A retrocharge or retrocharge reversal.
     */
    export interface RetrochargeEvent {
        /**
         * The type of event.
         *
         * Possible values:
         *
         * * Retrocharge
         *
         * * RetrochargeReversal
         */
        RetrochargeEventType?: string;
        /**
         * An Amazon-defined identifier for an order.
         */
        AmazonOrderId?: string;
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * The base tax associated with the retrocharge event.
         */
        BaseTax?: /* A currency type and amount. */ Currency;
        /**
         * The shipping tax associated with the retrocharge event.
         */
        ShippingTax?: /* A currency type and amount. */ Currency;
        /**
         * The name of the marketplace where the retrocharge event occurred.
         */
        MarketplaceName?: string;
        /**
         * A list of information about taxes withheld.
         */
        RetrochargeTaxWithheldList?: /* A list of information about taxes withheld. */ TaxWithheldComponentList;
    }
    /**
     * A list of information about Retrocharge or RetrochargeReversal events.
     */
    export type RetrochargeEventList = /* A retrocharge or retrocharge reversal. */ RetrochargeEvent[];
    /**
     * Return authorization information for items accepted for return.
     */
    export interface ReturnAuthorization {
        /**
         * An identifier for the return authorization. This identifier associates return items with the return authorization used to return them.
         */
        returnAuthorizationId: string;
        /**
         * An identifier for the Amazon fulfillment center that the return items should be sent to.
         */
        fulfillmentCenterId: string;
        /**
         * The address of the Amazon fulfillment center that the return items should be sent to.
         */
        returnToAddress: Address;
        /**
         * The return merchandise authorization (RMA) that Amazon needs to process the return.
         */
        amazonRmaId: string;
        /**
         * A URL for a web page that contains the return authorization barcode and the mailing label. This does not include pre-paid shipping.
         */
        rmaPageURL: string;
    }
    /**
     * An array of return authorization information.
     */
    export type ReturnAuthorizationList = /* Return authorization information for items accepted for return. */ ReturnAuthorization[];
    /**
     * An item that Amazon accepted for return.
     */
    export interface ReturnItem {
        /**
         * An identifier assigned by the seller to the return item.
         */
        sellerReturnItemId: string;
        /**
         * The identifier assigned to the item by the seller when the fulfillment order was created.
         */
        sellerFulfillmentOrderItemId: string;
        /**
         * The identifier for the shipment that is associated with the return item.
         */
        amazonShipmentId: string;
        /**
         * The return reason code assigned to the return item by the seller.
         */
        sellerReturnReasonCode: string;
        /**
         * An optional comment about the return item.
         */
        returnComment?: string;
        /**
         * The return reason code that the Amazon fulfillment center assigned to the return item.
         */
        amazonReturnReasonCode?: string;
        /**
         * Indicates if the return item has been processed by an Amazon fulfillment center.
         */
        status: /* Indicates if the return item has been processed by a fulfillment center. */ FulfillmentReturnItemStatus;
        /**
         * Indicates when the status last changed.
         */
        statusChangedDate: Timestamp /* date-time */;
        /**
         * Identifies the return authorization used to return this item. See ReturnAuthorization.
         */
        returnAuthorizationId?: string;
        returnReceivedCondition?: /* The condition of the return item when received by an Amazon fulfillment center. */ ReturnItemDisposition;
        /**
         * The identifier for the Amazon fulfillment center that processed the return item.
         */
        fulfillmentCenterId?: string;
    }
    /**
     * The condition of the return item when received by an Amazon fulfillment center.
     */
    export type ReturnItemDisposition = "Sellable" | "Defective" | "CustomerDamaged" | "CarrierDamaged" | "FulfillerDamaged";
    /**
     * An array of items that Amazon accepted for return. Returns empty if no items were accepted for return.
     */
    export type ReturnItemList = /* An item that Amazon accepted for return. */ ReturnItem[];
    /**
     * A SAFE-T claim reimbursement on the seller's account.
     */
    export interface SAFETReimbursementEvent {
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * A SAFE-T claim identifier.
         */
        SAFETClaimId?: string;
        /**
         * The amount of the reimbursement.
         */
        ReimbursedAmount?: /* A currency type and amount. */ Currency;
        /**
         * Indicates why the seller was reimbursed.
         */
        ReasonCode?: string;
        SAFETReimbursementItemList?: /* A list of SAFETReimbursementItems. */ SAFETReimbursementItemList;
    }
    /**
     * A list of SAFETReimbursementEvents.
     */
    export type SAFETReimbursementEventList = /* A SAFE-T claim reimbursement on the seller's account. */ SAFETReimbursementEvent[];
    /**
     * An item from a SAFE-T claim reimbursement.
     */
    export interface SAFETReimbursementItem {
        /**
         * A list of charges associated with the item.
         */
        itemChargeList?: /* A list of charge information on the seller's account. */ ChargeComponentList;
        /**
         * The description of the item as shown on the product detail page on the retail website.
         */
        productDescription?: string;
        /**
         * The number of units of the item being reimbursed.
         */
        quantity?: string;
    }
    /**
     * A list of SAFETReimbursementItems.
     */
    export type SAFETReimbursementItemList = /* An item from a SAFE-T claim reimbursement. */ SAFETReimbursementItem[];
    /**
     * Reasons why a given seller SKU is not recommended for shipment to Amazon's fulfillment network.
     */
    export interface SKUInboundGuidance {
        /**
         * The seller SKU of the item.
         */
        SellerSKU: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN: string;
        /**
         * Specific inbound guidance for an item.
         */
        InboundGuidance: /* Specific inbound guidance for an item. */ InboundGuidance;
        /**
         * A list of reasons for the current inbound guidance for this item.
         */
        GuidanceReasonList?: /* A list of inbound guidance reason information. */ GuidanceReasonList;
    }
    /**
     * A list of SKU inbound guidance information.
     */
    export type SKUInboundGuidanceList = /* Reasons why a given seller SKU is not recommended for shipment to Amazon's fulfillment network. */ SKUInboundGuidance[];
    /**
     * Labeling requirements and item preparation instructions to help you prepare items for shipment to Amazon's fulfillment network.
     */
    export interface SKUPrepInstructions {
        /**
         * The seller SKU of the item.
         */
        SellerSKU?: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN?: string;
        BarcodeInstruction?: /* Labeling requirements for the item. For more information about FBA labeling requirements, see the Seller Central Help for your marketplace. */ BarcodeInstruction;
        PrepGuidance?: /* Item preparation instructions. */ PrepGuidance;
        PrepInstructionList?: /* A list of preparation instructions to help with item sourcing decisions. */ PrepInstructionList;
        AmazonPrepFeesDetailsList?: /* A list of preparation instructions and fees for Amazon to prep goods for shipment. */ AmazonPrepFeesDetailsList;
    }
    /**
     * A list of SKU labeling requirements and item preparation instructions.
     */
    export type SKUPrepInstructionsList = /* Labeling requirements and item preparation instructions to help you prepare items for shipment to Amazon's fulfillment network. */ SKUPrepInstructions[];
    /**
     * A list of sales rank information for the item by category.
     */
    export type SalesRankList = SalesRankType[];
    export interface SalesRankType {
        /**
         * Identifies the item category from which the sales rank is taken.
         */
        ProductCategoryId: string;
        /**
         * The sales rank of the item within the item category.
         */
        Rank: number; // int32
    }
    /**
     * Delivery information for a scheduled delivery.
     */
    export interface ScheduledDeliveryInfo {
        /**
         * The time zone of the destination address for the fulfillment order preview. Must be an IANA time zone name. Example: Asia/Tokyo.
         */
        deliveryTimeZone: string;
        /**
         * An array of time ranges that are available for scheduled delivery.
         */
        deliveryWindows: /* An array of delivery windows. */ DeliveryWindowList;
    }
    /**
     * A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>.
     */
    export interface Schema {
        [name: string]: any;
    }
    /**
     * The scope of work for the order.
     */
    export interface ScopeOfWork {
        /**
         * The Amazon Standard Identification Number (ASIN) of the service job.
         */
        asin?: string;
        /**
         * The title of the service job.
         */
        title?: string;
        /**
         * The number of service jobs.
         */
        quantity?: number;
        /**
         * A list of skills required to perform the job.
         */
        requiredSkills?: string[];
    }
    /**
     * Information about the seller of the service job.
     */
    export interface Seller {
        /**
         * The identifier of the seller of the service job.
         */
        sellerId?: string; // ^[A-Z0-9]*$
    }
    /**
     * An event linked to the payment of a fee related to the specified deal.
     */
    export interface SellerDealPaymentEvent {
        /**
         * The date and time when the financial event was posted.
         */
        postedDate?: Date /* date-time */;
        /**
         * The unique identifier of the deal.
         */
        dealId?: string;
        /**
         * The internal description of the deal.
         */
        dealDescription?: string;
        /**
         * The type of event: SellerDealComplete.
         */
        eventType?: string;
        /**
         * The type of fee: RunLightningDealFee.
         */
        feeType?: string;
        /**
         * The monetary amount of the fee.
         */
        feeAmount?: /* A currency type and amount. */ Currency;
        /**
         * The monetary amount of the tax applied.
         */
        taxAmount?: /* A currency type and amount. */ Currency;
        /**
         * The total monetary amount paid.
         */
        totalAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of payment events for deal-related fees.
     */
    export type SellerDealPaymentEventList = /* An event linked to the payment of a fee related to the specified deal. */ SellerDealPaymentEvent[];
    /**
     * Information about the seller's feedback, including the percentage of positive feedback, and the total number of ratings received.
     */
    export interface SellerFeedbackType {
        /**
         * The percentage of positive feedback for the seller in the past 365 days.
         */
        SellerPositiveFeedbackRating?: number; // double
        /**
         * The number of ratings received about the seller.
         */
        FeedbackCount: number; // int64
    }
    /**
     * The freight class of the shipment. For information about determining the freight class, contact the carrier.
     */
    export type SellerFreightClass = "50" | "55" | "60" | "65" | "70" | "77.5" | "85" | "92.5" | "100" | "110" | "125" | "150" | "175" | "200" | "250" | "300" | "400" | "500";
    /**
     * Specifies characteristics that apply to a seller input.
     */
    export interface SellerInputDefinition {
        /**
         * When true, the additional input field is required.
         */
        IsRequired: boolean;
        /**
         * The data type of the additional input field.
         */
        DataType: string;
        Constraints: /* List of constraints. */ Constraints;
        /**
         * The display text for the additional input field.
         */
        InputDisplayText: string;
        /**
         * Whether the seller input applies to the item or the shipment.
         */
        InputTarget?: /* Indicates whether the additional seller input is at the item or shipment level. */ InputTargetType;
        StoredValue: /* Additional information required to purchase shipping. */ AdditionalSellerInput;
        RestrictedSetValues?: /* The set of fixed values in an additional seller input. */ RestrictedSetValues;
    }
    /**
     * A seller-defined order identifier.
     */
    export type SellerOrderId = string;
    /**
     * A fee payment event for the Early Reviewer Program.
     */
    export interface SellerReviewEnrollmentPaymentEvent {
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * An enrollment identifier.
         */
        EnrollmentId?: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item that was enrolled in the Early Reviewer Program.
         */
        ParentASIN?: string;
        FeeComponent?: /* A fee associated with the event. */ FeeComponent;
        ChargeComponent?: /**
         * A charge on the seller's account.
         *
         * Possible values:
         *
         * * Principal - The selling price of the order item, equal to the selling price of the item multiplied by the quantity ordered.
         *
         * * Tax - The tax collected by the seller on the Principal.
         *
         * * MarketplaceFacilitatorTax-Principal - The tax withheld on the Principal.
         *
         * * MarketplaceFacilitatorTax-Shipping - The tax withheld on the ShippingCharge.
         *
         * * MarketplaceFacilitatorTax-Giftwrap - The tax withheld on the Giftwrap charge.
         *
         * * MarketplaceFacilitatorTax-Other - The tax withheld on other miscellaneous charges.
         *
         * * Discount - The promotional discount for an order item.
         *
         * * TaxDiscount - The tax amount deducted for promotional rebates.
         *
         * * CODItemCharge - The COD charge for an order item.
         *
         * * CODItemTaxCharge - The tax collected by the seller on a CODItemCharge.
         *
         * * CODOrderCharge - The COD charge for an order.
         *
         * * CODOrderTaxCharge - The tax collected by the seller on a CODOrderCharge.
         *
         * * CODShippingCharge - Shipping charges for a COD order.
         *
         * * CODShippingTaxCharge - The tax collected by the seller on a CODShippingCharge.
         *
         * * ShippingCharge - The shipping charge.
         *
         * * ShippingTax - The tax collected by the seller on a ShippingCharge.
         *
         * * Goodwill - The amount given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.
         *
         * * Giftwrap - The gift wrap charge.
         *
         * * GiftwrapTax - The tax collected by the seller on a Giftwrap charge.
         *
         * * RestockingFee - The charge applied to the buyer when returning a product in certain categories.
         *
         * * ReturnShipping - The amount given to the buyer to compensate for shipping the item back in the event we are at fault.
         *
         * * PointsFee - The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.
         *
         * * GenericDeduction - A generic bad debt deduction.
         *
         * * FreeReplacementReturnShipping - The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.
         *
         * * PaymentMethodFee - The fee collected for certain payment methods in certain marketplaces.
         *
         * * ExportCharge - The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.
         *
         * * SAFE-TReimbursement - The SAFE-T claim amount for the item.
         *
         * * TCS-CGST - Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).
         *
         * * TCS-SGST - Tax Collected at Source for State Goods and Services Tax (SGST).
         *
         * * TCS-IGST - Tax Collected at Source for Integrated Goods and Services Tax (IGST).
         *
         * * TCS-UTGST - Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
         */
        ChargeComponent;
        /**
         * The FeeComponent value plus the ChargeComponent value.
         */
        TotalAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of information about fee events for the Early Reviewer Program.
     */
    export type SellerReviewEnrollmentPaymentEventList = /* A fee payment event for the Early Reviewer Program. */ SellerReviewEnrollmentPaymentEvent[];
    /**
     * Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.
     */
    export type SellerSKU = string;
    export interface SellerSKUIdentifier {
        /**
         * A marketplace identifier.
         */
        MarketplaceId: string;
        /**
         * The seller identifier submitted for the operation.
         */
        SellerId: string;
        /**
         * The seller stock keeping unit (SKU) of the item.
         */
        SellerSKU: string;
    }
    /**
     * A service fee on the seller's account.
     */
    export interface ServiceFeeEvent {
        /**
         * An Amazon-defined identifier for an order.
         */
        AmazonOrderId?: string;
        /**
         * A short description of the service fee reason.
         */
        FeeReason?: string;
        /**
         * A list of fee components associated with the service fee.
         */
        FeeList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
         */
        SellerSKU?: string;
        /**
         * A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center.
         */
        FnSKU?: string;
        /**
         * A short description of the service fee event.
         */
        FeeDescription?: string;
        /**
         * The Amazon Standard Identification Number (ASIN) of the item.
         */
        ASIN?: string;
    }
    /**
     * A list of information about service fee events.
     */
    export type ServiceFeeEventList = /* A service fee on the seller's account. */ ServiceFeeEvent[];
    /**
     * The job details of a service.
     */
    export interface ServiceJob {
        /**
         * The date and time of the creation of the job, in ISO 8601 format.
         */
        createTime?: string; // date-time
        /**
         * The service job identifier.
         */
        serviceJobId?: /* Amazon identifier for the service job. */ ServiceJobId;
        /**
         * The status of the service job.
         */
        serviceJobStatus?: "NOT_SERVICED" | "CANCELLED" | "COMPLETED" | "PENDING_SCHEDULE" | "NOT_FULFILLABLE" | "HOLD" | "PAYMENT_DECLINED";
        /**
         * The scope of work for the order.
         */
        scopeOfWork?: /* The scope of work for the order. */ ScopeOfWork;
        /**
         * Information about the seller of the service job.
         */
        seller?: /* Information about the seller of the service job. */ Seller;
        /**
         * Information about the service job provider.
         */
        serviceJobProvider?: /* Information about the service job provider. */ ServiceJobProvider;
        /**
         * A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order.
         */
        preferredAppointmentTimes?: /* The time of the appointment window. */ AppointmentTime[];
        /**
         * A list of appointments.
         */
        appointments?: /* The details of an appointment. */ Appointment[];
        /**
         * The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
         */
        serviceOrderId?: /* The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format. */ OrderId;
        /**
         * The marketplace identifier.
         */
        marketplaceId?: string; // ^[A-Z0-9]*$
        /**
         * Information about the buyer.
         */
        buyer?: /* Information about the buyer. */ Buyer;
        /**
         * A list of items associated with the service job.
         */
        associatedItems?: /* Information about an item associated with the service job. */ AssociatedItem[];
        /**
         * Information about the location of the service job.
         */
        serviceLocation?: /* Information about the location of the service job. */ ServiceLocation;
    }
    /**
     * Amazon identifier for the service job.
     */
    export type ServiceJobId = string;
    /**
     * Information about the service job provider.
     */
    export interface ServiceJobProvider {
        /**
         * The identifier of the service job provider.
         */
        serviceJobProviderId?: string; // ^[A-Z0-9]*$
    }
    /**
     * Information about the location of the service job.
     */
    export interface ServiceLocation {
        /**
         * The location of the service job.
         */
        serviceLocationType?: "IN_HOME" | "IN_STORE" | "ONLINE";
        /**
         * The shipping address for the service job.
         */
        address?: Address;
    }
    /**
     * The specific rate for a shipping service, or null if no service available.
     */
    export interface ServiceRate {
        /**
         * The total charge that will be billed for the rate.
         */
        totalCharge: /* A currency type and amount. */ Currency;
        /**
         * The weight that was used to calculate the totalCharge.
         */
        billableWeight: /* The weight of the package. */ Weight;
        serviceType: /* The type of shipping service that will be used for the service offering. */ ServiceType;
        promise: /* The promised delivery time and pickup time. */ ShippingPromiseSet;
    }
    /**
     * A list of service rates.
     */
    export type ServiceRateList = /* The specific rate for a shipping service, or null if no service available. */ ServiceRate[];
    /**
     * The type of shipping service that will be used for the service offering.
     */
    export type ServiceType = "Amazon Shipping Ground" | "Amazon Shipping Standard" | "Amazon Shipping Premium";
    /**
     * A list of service types that can be used to send the shipment.
     */
    export type ServiceTypeList = /* The type of shipping service that will be used for the service offering. */ ServiceType[];
    /**
     * Response schema for add or reschedule appointment operation.
     */
    export interface SetAppointmentResponse {
        /**
         * New appointment id generated during add or reschedule appointment operation.
         */
        appointmentId?: /* The appointment identifier. */ AppointmentId;
        /**
         * Warnings generated during add or reschedule appointment operation.
         */
        warnings?: /* A list of warnings returned in the sucessful execution response of an API request. */ WarningList;
        /**
         * Errors occurred during during add or reschedule appointment operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * The details of a shipment, including the shipment status.
     */
    export interface Shipment {
        ShipmentId: /* An Amazon-defined shipment identifier. */ ShipmentId;
        AmazonOrderId: /* An Amazon-defined order identifier, in 3-7-7 format. <br>**Pattern** : `[0-9A-Z]{3}-[0-9]{7}-[0-9]{7}`. */ AmazonOrderId;
        SellerOrderId?: /* A seller-defined order identifier. */ SellerOrderId;
        ItemList: /* A list of items. */ ItemList;
        /**
         * The address of the sender.
         */
        ShipFromAddress: Address;
        /**
         * The destination address for the shipment.
         */
        ShipToAddress: Address;
        PackageDimensions: /* The dimensions of a package contained in a shipment. */ PackageDimensions;
        /**
         * The package weight.
         */
        Weight: /* The weight of the package. */ Weight;
        /**
         * If DeclaredValue was specified in a previous call to the createShipment operation, then Insurance indicates the amount that the carrier will use to insure the shipment. If DeclaredValue was not specified with a previous call to the createShipment operation, then the shipment will be insured for the carrier's minimum insurance amount, or the combined sale prices that the items are listed for in the shipment, whichever is less.
         */
        Insurance: /* Currency type and amount. */ CurrencyAmount;
        ShippingService: /* A shipping service offer made by a carrier. */ ShippingService;
        /**
         * Data for creating a shipping label and dimensions for printing the label. If the shipment is canceled, an empty Label is returned.
         */
        Label: /* Data for creating a shipping label and dimensions for printing the label. */ Label;
        /**
         * The shipment status.
         */
        Status: /* Indicates the status of the inbound shipment. When used with the createInboundShipment operation, WORKING is the only valid value. When used with the updateInboundShipment operation, possible values are WORKING, SHIPPED or CANCELLED. */ ShipmentStatus;
        TrackingId?: /* The tracking number of the package, provided by the carrier. */ TrackingId;
        /**
         * The date and time the shipment was created.
         */
        CreatedDate: Timestamp /* date-time */;
        /**
         * The date and time of the last update.
         */
        LastUpdatedDate?: Timestamp /* date-time */;
    }
    /**
     * A shipment, refund, guarantee claim, or chargeback.
     */
    export interface ShipmentEvent {
        /**
         * An Amazon-defined identifier for an order.
         */
        AmazonOrderId?: string;
        /**
         * A seller-defined identifier for an order.
         */
        SellerOrderId?: string;
        /**
         * The name of the marketplace where the event occurred.
         */
        MarketplaceName?: string;
        /**
         * A list of order-level charges. These charges are applicable to Multi-Channel Fulfillment COD orders.
         */
        OrderChargeList?: /* A list of charge information on the seller's account. */ ChargeComponentList;
        /**
         * A list of order-level charge adjustments. These adjustments are applicable to Multi-Channel Fulfillment COD orders.
         */
        OrderChargeAdjustmentList?: /* A list of charge information on the seller's account. */ ChargeComponentList;
        /**
         * A list of shipment-level fees.
         */
        ShipmentFeeList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * A list of shipment-level fee adjustments.
         */
        ShipmentFeeAdjustmentList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * A list of order-level fees. These charges are applicable to Multi-Channel Fulfillment orders.
         */
        OrderFeeList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * A list of order-level fee adjustments. These adjustments are applicable to Multi-Channel Fulfillment orders.
         */
        OrderFeeAdjustmentList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * A list of transactions where buyers pay Amazon through one of the credit cards offered by Amazon or where buyers pay a seller directly through COD.
         */
        DirectPaymentList?: /* A list of direct payment information. */ DirectPaymentList;
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        ShipmentItemList?: /* A list of shipment items. */ ShipmentItemList;
        /**
         * A list of shipment item adjustments.
         */
        ShipmentItemAdjustmentList?: /* A list of shipment items. */ ShipmentItemList;
    }
    /**
     * A list of shipment event information.
     */
    export type ShipmentEventList = /* A shipment, refund, guarantee claim, or chargeback. */ ShipmentEvent[];
    /**
     * An Amazon-defined shipment identifier.
     */
    export type ShipmentId = string;
    /**
     * An item of a shipment, refund, guarantee claim, or chargeback.
     */
    export interface ShipmentItem {
        /**
         * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
         */
        SellerSKU?: string;
        /**
         * An Amazon-defined order item identifier.
         */
        OrderItemId?: string;
        /**
         * An Amazon-defined order adjustment identifier defined for refunds, guarantee claims, and chargeback events.
         */
        OrderAdjustmentItemId?: string;
        /**
         * The number of items shipped.
         */
        QuantityShipped?: number; // int32
        /**
         * A list of charges associated with the shipment item.
         */
        ItemChargeList?: /* A list of charge information on the seller's account. */ ChargeComponentList;
        /**
         * A list of charge adjustments associated with the shipment item. This value is only returned for refunds, guarantee claims, and chargeback events.
         */
        ItemChargeAdjustmentList?: /* A list of charge information on the seller's account. */ ChargeComponentList;
        /**
         * A list of fees associated with the shipment item.
         */
        ItemFeeList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * A list of fee adjustments associated with the shipment item. This value is only returned for refunds, guarantee claims, and chargeback events.
         */
        ItemFeeAdjustmentList?: /* A list of fee component information. */ FeeComponentList;
        /**
         * A list of taxes withheld information for a shipment item.
         */
        ItemTaxWithheldList?: /* A list of information about taxes withheld. */ TaxWithheldComponentList;
        PromotionList?: /* A list of promotions. */ PromotionList;
        /**
         * A list of promotion adjustments associated with the shipment item. This value is only returned for refunds, guarantee claims, and chargeback events.
         */
        PromotionAdjustmentList?: /* A list of promotions. */ PromotionList;
        /**
         * The cost of Amazon Points granted for a shipment item.
         */
        CostOfPointsGranted?: /* A currency type and amount. */ Currency;
        /**
         * The cost of Amazon Points returned for a shipment item. This value is only returned for refunds, guarantee claims, and chargeback events.
         */
        CostOfPointsReturned?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of shipment items.
     */
    export type ShipmentItemList = /* An item of a shipment, refund, guarantee claim, or chargeback. */ ShipmentItem[];
    /**
     * Shipment information required for requesting shipping service offers or for creating a shipment.
     */
    export interface ShipmentRequestDetails {
        /**
         * An Amazon-defined order identifier in 3-7-7 format.
         */
        AmazonOrderId: /* An Amazon-defined order identifier, in 3-7-7 format. <br>**Pattern** : `[0-9A-Z]{3}-[0-9]{7}-[0-9]{7}`. */ AmazonOrderId;
        /**
         * A seller-defined order identifier.
         */
        SellerOrderId?: /* A seller-defined order identifier. */ SellerOrderId;
        ItemList: /* A list of items. */ ItemList;
        /**
         * The address of the sender.
         */
        ShipFromAddress: Address;
        /**
         * The package dimensions.
         */
        PackageDimensions: /* The dimensions of a package contained in a shipment. */ PackageDimensions;
        /**
         * The package weight.
         */
        Weight: /* The weight of the package. */ Weight;
        /**
         * The date by which the package must arrive to keep the promise to the customer, in ISO 8601 datetime format. If MustArriveByDate is specified, only shipping service offers that can be delivered by that date are returned.
         */
        MustArriveByDate?: Timestamp /* date-time */;
        /**
         * When used in a request, this is the date and time that the seller wants to ship the package. When used in a response, this is the date and time that the package can be shipped by the indicated method.
         */
        ShipDate?: Timestamp /* date-time */;
        /**
         * Extra services offered by the carrier.
         */
        ShippingServiceOptions: /* Extra services provided by a carrier. */ ShippingServiceOptions;
        /**
         * Label customization options.
         */
        LabelCustomization?: /* Custom text for shipping labels. */ LabelCustomization;
    }
    /**
     * Indicates the status of the inbound shipment. When used with the createInboundShipment operation, WORKING is the only valid value. When used with the updateInboundShipment operation, possible values are WORKING, SHIPPED or CANCELLED.
     */
    export type ShipmentStatus = "WORKING" | "SHIPPED" | "RECEIVING" | "CANCELLED" | "DELETED" | "CLOSED" | "ERROR" | "IN_TRANSIT" | "DELIVERED" | "CHECKED_IN";
    /**
     * Specifies the carrier shipment type in a putTransportDetails request.
     */
    export type ShipmentType = "SP" | "LTL";
    /**
     * Filter for use when requesting eligible shipping services.
     */
    export interface ShippingOfferingFilter {
        /**
         * When true, include a packing slip with the label.
         */
        IncludePackingSlipWithLabel?: boolean;
        /**
         * When true, include complex shipping options.
         */
        IncludeComplexShippingOptions?: boolean;
        CarrierWillPickUp?: /* Carrier will pick up option. */ CarrierWillPickUpOption;
        DeliveryExperience?: /* The delivery confirmation level. */ DeliveryExperienceOption;
    }
    /**
     * The promised delivery time and pickup time.
     */
    export interface ShippingPromiseSet {
        /**
         * The time window in which the shipment will be delivered.
         */
        deliveryWindow?: /* The time range. */ TimeRange;
        /**
         * The time window in which Amazon Shipping will pick up the shipment.
         */
        receiveWindow?: /* The time range. */ TimeRange;
    }
    /**
     * A shipping service offer made by a carrier.
     */
    export interface ShippingService {
        /**
         * A plain text representation of a carrier's shipping service. For example, "UPS Ground" or "FedEx Standard Overnight".
         */
        ShippingServiceName: string;
        /**
         * The name of the carrier.
         */
        CarrierName: string;
        ShippingServiceId: /* An Amazon-defined shipping service identifier. */ ShippingServiceIdentifier;
        /**
         * An Amazon-defined shipping service offer identifier.
         */
        ShippingServiceOfferId: string;
        /**
         * The date that the carrier will ship the package.
         */
        ShipDate: Timestamp /* date-time */;
        /**
         * The earliest date by which the shipment will be delivered.
         */
        EarliestEstimatedDeliveryDate?: Timestamp /* date-time */;
        /**
         * The latest date by which the shipment will be delivered.
         */
        LatestEstimatedDeliveryDate?: Timestamp /* date-time */;
        /**
         * The amount that the carrier will charge for the shipment.
         */
        Rate: /* Currency type and amount. */ CurrencyAmount;
        /**
         * Extra services offered by the carrier.
         */
        ShippingServiceOptions: /* Extra services provided by a carrier. */ ShippingServiceOptions;
        AvailableShippingServiceOptions?: /* The available shipping service options. */ AvailableShippingServiceOptions;
        AvailableLabelFormats?: /* List of label formats. */ LabelFormatList;
        AvailableFormatOptionsForLabel?: /* The available label formats. */ AvailableFormatOptionsForLabelList;
        /**
         * When true, additional seller inputs are required.
         */
        RequiresAdditionalSellerInputs: boolean;
    }
    /**
     * An Amazon-defined shipping service identifier.
     */
    export type ShippingServiceIdentifier = string;
    /**
     * A list of shipping services offers.
     */
    export type ShippingServiceList = /* A shipping service offer made by a carrier. */ ShippingService[];
    /**
     * Extra services provided by a carrier.
     */
    export interface ShippingServiceOptions {
        /**
         * The delivery confirmation level.
         */
        DeliveryExperience: /* The delivery confirmation level. */ DeliveryExperienceType;
        /**
         * The declared value of the shipment. The carrier uses this value to determine the amount to use to insure the shipment. If DeclaredValue is greater than the carrier's minimum insurance amount, the seller is charged for the additional insurance as determined by the carrier. For information about optional insurance coverage, see the Seller Central Help [UK](https://sellercentral.amazon.co.uk/gp/help/200204080) [US](https://sellercentral.amazon.com/gp/help/200204080).
         */
        DeclaredValue?: /* Currency type and amount. */ CurrencyAmount;
        /**
         * When true, the carrier will pick up the package.
         *
         * Note: Scheduled carrier pickup is available only using Dynamex (US), DPD (UK), and Royal Mail (UK).
         */
        CarrierWillPickUp: boolean;
        CarrierWillPickUpOption?: /* Carrier will pick up option. */ CarrierWillPickUpOption;
        /**
         * The seller's preferred label format.
         */
        LabelFormat?: /* The label format. */ LabelFormat;
    }
    /**
     * The shipping method used for the fulfillment order.
     */
    export type ShippingSpeedCategory = "Standard" | "Expedited" | "Priority" | "ScheduledDelivery";
    export type ShippingSpeedCategoryList = /* The shipping method used for the fulfillment order. */ ShippingSpeedCategory[];
    export interface ShippingTimeType {
        /**
         * (0-2 days, 3-7 days, 8-13 days, or 14 or more days) – Indicates the maximum time within which the item will likely be shipped once an order has been placed.
         */
        Max?: string;
    }
    /**
     * The state and country from where the item is shipped.
     */
    export interface ShipsFromType {
        /**
         * The state from where the item is shipped.
         */
        State?: string;
        /**
         * The country from where the item is shipped.
         */
        Country?: string;
    }
    /**
     * The Small and Light eligibility status of the item indicated by the specified seller SKU.
     */
    export interface SmallAndLightEligibility {
        marketplaceId: /* A marketplace identifier. */ MarketplaceId;
        sellerSKU: /* Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */ SellerSKU;
        status: /* The Small and Light eligibility status of the item. */ SmallAndLightEligibilityStatus;
    }
    /**
     * The Small and Light eligibility status of the item.
     */
    export type SmallAndLightEligibilityStatus = "ELIGIBLE" | "NOT_ELIGIBLE";
    /**
     * The Small and Light enrollment status of the item indicated by the specified seller SKU.
     */
    export interface SmallAndLightEnrollment {
        marketplaceId: /* A marketplace identifier. */ MarketplaceId;
        sellerSKU: /* Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */ SellerSKU;
        status: /* The Small and Light enrollment status of the item. */ SmallAndLightEnrollmentStatus;
    }
    /**
     * The Small and Light enrollment status of the item.
     */
    export type SmallAndLightEnrollmentStatus = "ENROLLED" | "NOT_ENROLLED";
    /**
     * Request schema for submitting items for which to retrieve fee estimates.
     */
    export interface SmallAndLightFeePreviewRequest {
        marketplaceId: /* A marketplace identifier. */ MarketplaceId;
        /**
         * A list of items for which to retrieve fee estimates (limit: 25).
         */
        items: /* An item in the Amazon catalog. */ Item[];
    }
    export interface SmallAndLightFeePreviews {
        /**
         * A list of fee estimates for the requested items. The order of the fee estimates will follow the same order as the items in the request, with duplicates removed.
         */
        data?: /* The fee estimate for a specific item. */ FeePreview[];
    }
    /**
     * A simple object containing the name of the template.
     */
    export interface SolicitationsAction {
        name: string;
    }
    /**
     * A credit given to a solution provider.
     */
    export interface SolutionProviderCreditEvent {
        /**
         * The transaction type.
         */
        ProviderTransactionType?: string;
        /**
         * A seller-defined identifier for an order.
         */
        SellerOrderId?: string;
        /**
         * The identifier of the marketplace where the order was placed.
         */
        MarketplaceId?: string;
        /**
         * The two-letter country code of the country associated with the marketplace where the order was placed.
         */
        MarketplaceCountryCode?: string;
        /**
         * The Amazon-defined identifier of the seller.
         */
        SellerId?: string;
        /**
         * The store name where the payment event occurred.
         */
        SellerStoreName?: string;
        /**
         * The Amazon-defined identifier of the solution provider.
         */
        ProviderId?: string;
        /**
         * The store name where the payment event occurred.
         */
        ProviderStoreName?: string;
        /**
         * The amount of the credit.
         */
        TransactionAmount?: /* A currency type and amount. */ Currency;
        /**
         * The date and time that the credit transaction was created, in ISO 8601 date time format.
         */
        TransactionCreationDate?: Date /* date-time */;
    }
    /**
     * A list of information about solution provider credits.
     */
    export type SolutionProviderCreditEventList = /* A credit given to a solution provider. */ SolutionProviderCreditEvent[];
    /**
     * The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination.
     */
    export interface SqsResource {
        /**
         * The Amazon Resource Name (ARN) associated with the SQS queue.
         */
        arn: string; // ^arn:aws:sqs:\S+:\S+:\S+
    }
    /**
     * The type of standard identifier to print on the label.
     */
    export type StandardIdForLabel = "AmazonOrderId";
    /**
     * The state or province code.
     */
    export type StateOrProvinceCode = string;
    /**
     * The state or region where the person, business or institution is located.
     */
    export type StateOrRegion = string;
    export type StringList = string[];
    /**
     * Represents a subscription to receive notifications.
     */
    export interface Subscription {
        /**
         * The subscription identifier generated when the subscription is created.
         */
        subscriptionId: string;
        /**
         * The version of the payload object to be used in the notification.
         */
        payloadVersion: string;
        /**
         * The identifier for the destination where notifications will be delivered.
         */
        destinationId: string;
    }
    /**
     * Contains price information about the product, including the LowestPrices and BuyBoxPrices, the ListPrice, the SuggestedLowerPricePlusShipping, and NumberOfOffers and NumberOfBuyBoxEligibleOffers.
     */
    export interface Summary {
        /**
         * The number of unique offers contained in NumberOfOffers.
         */
        TotalOfferCount: number; // int32
        /**
         * A list that contains the total number of offers for the item for the given conditions and fulfillment channels.
         */
        NumberOfOffers?: NumberOfOffers;
        /**
         * A list of the lowest prices for the item.
         */
        LowestPrices?: LowestPrices;
        /**
         * A list of item prices.
         */
        BuyBoxPrices?: BuyBoxPrices;
        /**
         * The list price of the item as suggested by the manufacturer.
         */
        ListPrice?: MoneyType;
        /**
         * The suggested lower price of the item, including shipping and Amazon Points. The suggested lower price is based on a range of factors, including historical selling prices, recent Buy Box-eligible prices, and input from customers for your products.
         */
        SuggestedLowerPricePlusShipping?: MoneyType;
        /**
         * A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels.
         */
        BuyBoxEligibleOffers?: BuyBoxEligibleOffers;
        /**
         * When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing.
         */
        OffersAvailableTime?: string; // date-time
    }
    /**
     * A tax deduction at source (TDS) claim reimbursement event on the seller's account.
     */
    export interface TDSReimbursementEvent {
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * A tax deduction at source (TDS) claim identifier.
         */
        TdsOrderId?: string;
        /**
         * The amount of the reimbursement.
         */
        ReimbursedAmount?: /* A currency type and amount. */ Currency;
    }
    /**
     * A list of information about tax deduction at source (TDS) claim reimbursement events.
     */
    export type TDSReimbursementEventList = /* A tax deduction at source (TDS) claim reimbursement event on the seller's account. */ TDSReimbursementEvent[];
    /**
     * The tax classification for the order.
     */
    export interface TaxClassification {
        /**
         * The type of tax.
         */
        Name?: string;
        /**
         * The buyer's tax identifier.
         */
        Value?: string;
    }
    /**
     * Information about withheld taxes.
     */
    export interface TaxCollection {
        /**
         * The tax collection model applied to the item.
         */
        Model?: "MarketplaceFacilitator";
        /**
         * The party responsible for withholding the taxes and remitting them to the taxing authority.
         */
        ResponsibleParty?: "Amazon Services, Inc.";
    }
    /**
     * Information about the taxes withheld.
     */
    export interface TaxWithheldComponent {
        /**
         * The tax collection model applied to the item.
         *
         * Possible values:
         *
         * * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.
         *
         * * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
         */
        TaxCollectionModel?: string;
        /**
         * A list of charges that represent the types and amounts of taxes withheld.
         */
        TaxesWithheld?: /* A list of charge information on the seller's account. */ ChargeComponentList;
    }
    /**
     * A list of information about taxes withheld.
     */
    export type TaxWithheldComponentList = /* Information about the taxes withheld. */ TaxWithheldComponent[];
    /**
     * A technician who is assigned to perform the service job in part or in full.
     */
    export interface Technician {
        /**
         * The technician identifier.
         */
        technicianId?: string;
        /**
         * The name of the technician.
         */
        name?: string;
    }
    /**
     * A carrier who is temporarily unavailable, most likely due to a service outage experienced by the carrier.
     */
    export interface TemporarilyUnavailableCarrier {
        /**
         * The name of the carrier.
         */
        CarrierName: string;
    }
    /**
     * A list of temporarily unavailable carriers.
     */
    export type TemporarilyUnavailableCarrierList = /* A carrier who is temporarily unavailable, most likely due to a service outage experienced by the carrier. */ TemporarilyUnavailableCarrier[];
    /**
     * A carrier whose terms and conditions have not been accepted by the seller.
     */
    export interface TermsAndConditionsNotAcceptedCarrier {
        /**
         * The name of the carrier.
         */
        CarrierName: string;
    }
    /**
     * List of carriers whose terms and conditions were not accepted by the seller.
     */
    export type TermsAndConditionsNotAcceptedCarrierList = /* A carrier whose terms and conditions have not been accepted by the seller. */ TermsAndConditionsNotAcceptedCarrier[];
    /**
     * The time range.
     */
    export interface TimeRange {
        /**
         * The start date and time. This defaults to the current date and time.
         */
        start?: string; // date-time
        /**
         * The end date and time. This must come after the value of start. This defaults to the next business day from the start.
         */
        end?: string; // date-time
    }
    export type TimeStampStringType = string; // date-time
    export type Timestamp = string; // date-time
    /**
     * Address information for tracking the package.
     */
    export interface TrackingAddress {
        /**
         * The city.
         */
        city: string;
        /**
         * The state.
         */
        state: string;
        /**
         * The country.
         */
        country: string;
    }
    /**
     * Information for tracking package deliveries.
     */
    export interface TrackingEvent {
        /**
         * The date and time that the delivery event took place, in ISO 8601 date time format.
         */
        eventDate: Timestamp /* date-time */;
        /**
         * The city where the delivery event took place.
         */
        eventAddress: /* Address information for tracking the package. */ TrackingAddress;
        /**
         * The event code for the delivery event.
         */
        eventCode: /* The event code for the delivery event. */ EventCode;
        /**
         * A description for the corresponding event code.
         */
        eventDescription: string;
    }
    /**
     * An array of tracking event information.
     */
    export type TrackingEventList = /* Information for tracking package deliveries. */ TrackingEvent[];
    /**
     * The tracking number of the package, provided by the carrier.
     */
    export type TrackingId = string;
    /**
     * The payload schema for the getTrackingInformation operation.
     */
    export interface TrackingInformation {
        trackingId: /* The tracking number of the package, provided by the carrier. */ TrackingId;
        summary: /* The tracking summary. */ TrackingSummary;
        promisedDeliveryDate: /* The promised delivery date and time of a shipment. */ PromisedDeliveryDate /* date-time */;
        eventHistory: /* A list of events of a shipment. */ EventList;
    }
    /**
     * The tracking summary.
     */
    export interface TrackingSummary {
        /**
         * The derived status based on the events in the eventHistory.
         */
        status?: string;
    }
    /**
     * The Transparency code associated with the item.
     */
    export type TransparencyCode = string;
    /**
     * A list of transparency codes.
     */
    export type TransparencyCodeList = /* The Transparency code associated with the item. */ TransparencyCode[];
    /**
     * Inbound shipment information, including carrier details, shipment status, and the workflow status for a request for shipment with an Amazon-partnered carrier.
     */
    export interface TransportContent {
        TransportHeader: /* The shipping identifier, information about whether the shipment is by an Amazon-partnered carrier, and information about whether the shipment is Small Parcel or Less Than Truckload/Full Truckload (LTL/FTL). */ TransportHeader;
        TransportDetails: /* Inbound shipment information, including carrier details and shipment status. */ TransportDetailOutput;
        TransportResult: /* The workflow status for a shipment with an Amazon-partnered carrier. */ TransportResult;
    }
    /**
     * Information required to create an Amazon-partnered carrier shipping estimate, or to alert the Amazon fulfillment center to the arrival of an inbound shipment by a non-Amazon-partnered carrier.
     */
    export interface TransportDetailInput {
        PartneredSmallParcelData?: /* Information that is required by an Amazon-partnered carrier to ship a Small Parcel inbound shipment. */ PartneredSmallParcelDataInput;
        NonPartneredSmallParcelData?: /* Information that you provide to Amazon about a Small Parcel shipment shipped by a carrier that has not partnered with Amazon. */ NonPartneredSmallParcelDataInput;
        PartneredLtlData?: /* Information that is required by an Amazon-partnered carrier to ship a Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment. */ PartneredLtlDataInput;
        NonPartneredLtlData?: /* Information that you provide to Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by a carrier that has not partnered with Amazon. */ NonPartneredLtlDataInput;
    }
    /**
     * Inbound shipment information, including carrier details and shipment status.
     */
    export interface TransportDetailOutput {
        PartneredSmallParcelData?: /* Information returned by Amazon about a Small Parcel shipment by an Amazon-partnered carrier. */ PartneredSmallParcelDataOutput;
        NonPartneredSmallParcelData?: /* Information returned by Amazon about a Small Parcel shipment by a carrier that has not partnered with Amazon. */ NonPartneredSmallParcelDataOutput;
        PartneredLtlData?: /* Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by an Amazon-partnered carrier. */ PartneredLtlDataOutput;
        NonPartneredLtlData?: /* Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment shipped by a carrier that has not partnered with Amazon. */ NonPartneredLtlDataOutput;
    }
    /**
     * The shipping identifier, information about whether the shipment is by an Amazon-partnered carrier, and information about whether the shipment is Small Parcel or Less Than Truckload/Full Truckload (LTL/FTL).
     */
    export interface TransportHeader {
        /**
         * The Amazon seller identifier.
         */
        SellerId: string;
        /**
         * A shipment identifier originally returned by the createInboundShipmentPlan operation.
         */
        ShipmentId: string;
        /**
         * Indicates whether a putTransportDetails request is for a partnered carrier.
         *
         * Possible values:
         *
         * * true – Request is for an Amazon-partnered carrier.
         *
         * * false – Request is for a non-Amazon-partnered carrier.
         */
        IsPartnered: boolean;
        ShipmentType: /* Specifies the carrier shipment type in a putTransportDetails request. */ ShipmentType;
    }
    /**
     * The workflow status for a shipment with an Amazon-partnered carrier.
     */
    export interface TransportResult {
        TransportStatus: /* Indicates the status of the Amazon-partnered carrier shipment. */ TransportStatus;
        /**
         * An error code that identifies the type of error that occured.
         */
        ErrorCode?: string;
        /**
         * A message that describes the error condition.
         */
        ErrorDescription?: string;
    }
    /**
     * Indicates the status of the Amazon-partnered carrier shipment.
     */
    export type TransportStatus = "WORKING" | "ESTIMATING" | "ESTIMATED" | "ERROR_ON_ESTIMATING" | "CONFIRMING" | "CONFIRMED" | "ERROR_ON_CONFIRMING" | "VOIDING" | "VOIDED" | "ERROR_IN_VOIDING" | "ERROR";
    /**
     * An event related to a trial shipment.
     */
    export interface TrialShipmentEvent {
        /**
         * An Amazon-defined identifier for an order.
         */
        AmazonOrderId?: string;
        /**
         * The identifier of the financial event group.
         */
        FinancialEventGroupId?: string;
        /**
         * The date and time when the financial event was posted.
         */
        PostedDate?: Date /* date-time */;
        /**
         * The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
         */
        SKU?: string;
        /**
         * A list of fees charged by Amazon for trial shipments.
         */
        FeeList?: /* A list of fee component information. */ FeeComponentList;
    }
    /**
     * A list of information about trial shipment financial events.
     */
    export type TrialShipmentEventList = /* An event related to a trial shipment. */ TrialShipmentEvent[];
    /**
     * Information about unfulfillable items in a fulfillment order preview.
     */
    export interface UnfulfillablePreviewItem {
        /**
         * The seller SKU of the item.
         */
        sellerSku: string;
        quantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * A fulfillment order item identifier created with a call to the getFulfillmentPreview operation.
         */
        sellerFulfillmentOrderItemId: string;
        /**
         * Error codes associated with the fulfillment order preview that indicate why the item is unfulfillable.
         */
        itemUnfulfillableReasons?: StringList;
    }
    /**
     * An array of unfulfillable preview item information.
     */
    export type UnfulfillablePreviewItemList = /* Information about unfulfillable items in a fulfillment order preview. */ UnfulfillablePreviewItem[];
    /**
     * The quantity of unfulfillable inventory.
     */
    export interface UnfulfillableQuantity {
        /**
         * The total number of units in Amazon's fulfillment network in unsellable condition.
         */
        totalUnfulfillableQuantity?: number;
        /**
         * The number of units in customer damaged disposition.
         */
        customerDamagedQuantity?: number;
        /**
         * The number of units in warehouse damaged disposition.
         */
        warehouseDamagedQuantity?: number;
        /**
         * The number of units in distributor damaged disposition.
         */
        distributorDamagedQuantity?: number;
        /**
         * The number of units in carrier damaged disposition.
         */
        carrierDamagedQuantity?: number;
        /**
         * The number of units in defective disposition.
         */
        defectiveQuantity?: number;
        /**
         * The number of units in expired disposition.
         */
        expiredQuantity?: number;
    }
    /**
     * The unit of length.
     */
    export type UnitOfLength = "inches" | "centimeters";
    /**
     * Indicates the unit of measurement.
     */
    export type UnitOfMeasurement = "inches" | "centimeters";
    /**
     * Indicates the unit of weight.
     */
    export type UnitOfWeight = "pounds" | "kilograms";
    export type UnsignedIntType = number; // int64
    /**
     * Item information for updating a fulfillment order.
     */
    export interface UpdateFulfillmentOrderItem {
        /**
         * The seller SKU of the item.
         */
        sellerSku?: string;
        /**
         * Identifies the fulfillment order item to update. Created with a previous call to the createFulfillmentOrder operation.
         */
        sellerFulfillmentOrderItemId: string;
        quantity: /* The item quantity. */ Quantity /* int32 */;
        /**
         * A message to the gift recipient, if applicable.
         */
        giftMessage?: string;
        /**
         * Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip.
         */
        displayableComment?: string;
        /**
         * Amazon's fulfillment network SKU of the item.
         */
        fulfillmentNetworkSku?: string;
        /**
         * Indicates whether the item is sellable or unsellable.
         */
        orderItemDisposition?: string;
        /**
         * The monetary value assigned by the seller to this item.
         */
        perUnitDeclaredValue?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The amount to be collected from the recipient for this item in a COD (Cash On Delivery) order.
         */
        perUnitPrice?: /* An amount of money, including units in the form of currency. */ Money;
        /**
         * The tax on the amount to be collected from the recipient for this item in a COD (Cash On Delivery) order.
         */
        perUnitTax?: /* An amount of money, including units in the form of currency. */ Money;
    }
    /**
     * An array of fulfillment order item information for updating a fulfillment order.
     */
    export type UpdateFulfillmentOrderItemList = /* Item information for updating a fulfillment order. */ UpdateFulfillmentOrderItem[];
    export interface UpdateFulfillmentOrderRequest {
        /**
         * The marketplace the fulfillment order is placed against.
         */
        marketplaceId?: string;
        /**
         * A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of DisplayableOrderId should match the order identifier that the seller provides to the recipient. The seller can use the SellerFulfillmentOrderId for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.
         */
        displayableOrderId?: string;
        /**
         * The date and time of the fulfillment order. Displays as the order date in recipient-facing materials such as the outbound shipment packing slip.
         */
        displayableOrderDate?: Timestamp /* date-time */;
        /**
         * Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
         */
        displayableOrderComment?: string;
        shippingSpeedCategory?: /* The shipping method used for the fulfillment order. */ ShippingSpeedCategory;
        /**
         * The destination address for the fulfillment order.
         */
        destinationAddress?: Address;
        fulfillmentAction?: /* Specifies whether the fulfillment order should ship now or have an order hold put on it. */ FulfillmentAction;
        fulfillmentPolicy?: /* The FulfillmentPolicy value specified when you submitted the createFulfillmentOrder operation. */ FulfillmentPolicy;
        /**
         * The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format.
         */
        shipFromCountryCode?: string;
        notificationEmails?: /* A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. */ NotificationEmailList;
        /**
         * A list of features and their fulfillment policies to apply to the order.
         */
        featureConstraints?: /* Settings to apply to an order that includes the specified fulfillment feature. */ FeatureSettings[];
        /**
         * A list of items to include in the fulfillment order preview, including quantity.
         */
        items?: /* An array of fulfillment order item information for updating a fulfillment order. */ UpdateFulfillmentOrderItemList;
    }
    /**
     * The response schema for the updateFulfillmentOrder operation.
     */
    export interface UpdateFulfillmentOrderResponse {
        /**
         * One or more unexpected errors occurred during the updateFulfillmentOrder operation.
         */
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Information about an upload destination.
     */
    export interface UploadDestination {
        /**
         * The unique identifier for the upload destination.
         */
        uploadDestinationId?: string;
        /**
         * The URL for the upload destination.
         */
        url?: string;
        /**
         * The headers to include in the upload request.
         */
        headers?: unknown;
    }
    /**
     * The response schema for the voidTransport operation.
     */
    export interface VoidTransportResponse {
        /**
         * The payload for the voidTransport operation.
         */
        payload?: CommonTransportResult;
        errors?: /* A list of error responses returned when a request is unsuccessful. */ ErrorList;
    }
    /**
     * Warning returned when the request is successful but execution have some important callouts on basis of which API clients should take defined actions.
     */
    export interface Warning {
        /**
         * An warning code that identifies the type of warning that occurred.
         */
        code: string;
        /**
         * A message that describes the warning condition in a human-readable form.
         */
        message: string;
        /**
         * Additional details that can help the caller understand or address the warning.
         */
        details?: string;
    }
    /**
     * A list of warnings returned in the sucessful execution response of an API request.
     */
    export type WarningList = /* Warning returned when the request is successful but execution have some important callouts on basis of which API clients should take defined actions. */ Warning[];
    /**
     * The weight of the package.
     */
    export interface Weight {
        /**
         * The weight value.
         */
        Value: BigDecimalType /* double */;
        Unit: /* Indicates the unit of weight. */ UnitOfWeight;
    }
    /**
     * The weight value.
     */
    export type WeightValue = number; // double
}
declare namespace Paths {
    namespace AddAppointmentForServiceJobByServiceJobId {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Input for add appointment operation. */ Definitions.AddAppointmentRequest;
        }
        namespace Responses {
            export type $200 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $400 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $403 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $404 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $413 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $415 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $422 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $429 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $500 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $503 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
        }
    }
    namespace CancelFeed {
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.CancelFeedResponse;
            export type $400 = /* Response schema. */ Definitions.CancelFeedResponse;
            export type $401 = /* Response schema. */ Definitions.CancelFeedResponse;
            export type $403 = /* Response schema. */ Definitions.CancelFeedResponse;
            export type $404 = /* Response schema. */ Definitions.CancelFeedResponse;
            export type $415 = /* Response schema. */ Definitions.CancelFeedResponse;
            export type $429 = /* Response schema. */ Definitions.CancelFeedResponse;
            export type $500 = /* Response schema. */ Definitions.CancelFeedResponse;
            export type $503 = /* Response schema. */ Definitions.CancelFeedResponse;
        }
    }
    namespace CancelFulfillmentOrder {
        namespace Responses {
            export type $200 = /* The response schema for the cancelFulfillmentOrder operation. */ Definitions.CancelFulfillmentOrderResponse;
            export type $400 = /* The response schema for the cancelFulfillmentOrder operation. */ Definitions.CancelFulfillmentOrderResponse;
            export type $401 = /* The response schema for the cancelFulfillmentOrder operation. */ Definitions.CancelFulfillmentOrderResponse;
            export type $403 = /* The response schema for the cancelFulfillmentOrder operation. */ Definitions.CancelFulfillmentOrderResponse;
            export type $404 = /* The response schema for the cancelFulfillmentOrder operation. */ Definitions.CancelFulfillmentOrderResponse;
            export type $429 = /* The response schema for the cancelFulfillmentOrder operation. */ Definitions.CancelFulfillmentOrderResponse;
            export type $500 = /* The response schema for the cancelFulfillmentOrder operation. */ Definitions.CancelFulfillmentOrderResponse;
            export type $503 = /* The response schema for the cancelFulfillmentOrder operation. */ Definitions.CancelFulfillmentOrderResponse;
        }
    }
    namespace CancelReport {
        namespace Responses {
            export type $200 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
            export type $400 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
            export type $401 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
            export type $403 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
            export type $404 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
            export type $415 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
            export type $429 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
            export type $500 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
            export type $503 = /* The response for the cancelReport operation. */ Definitions.CancelReportResponse;
        }
    }
    namespace CancelReportSchedule {
        namespace Responses {
            export type $200 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
            export type $400 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
            export type $401 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
            export type $403 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
            export type $404 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
            export type $415 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
            export type $429 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
            export type $500 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
            export type $503 = /* The response for the cancelReportSchedule operation. */ Definitions.CancelReportScheduleResponse;
        }
    }
    namespace CancelServiceJobByServiceJobId {
        namespace Responses {
            export type $200 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $400 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $403 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $404 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $413 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $415 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $422 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $429 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $500 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
            export type $503 = /* Response schema for CancelServiceJobByServiceJobId operation. */ Definitions.CancelServiceJobByServiceJobIdResponse;
        }
    }
    namespace CancelShipment {
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $400 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $401 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $403 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $404 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $429 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $500 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $503 = /* Response schema. */ Definitions.CancelShipmentResponse;
        }
    }
    namespace CancelShipmentOld {
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $400 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $401 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $403 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $404 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $429 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $500 = /* Response schema. */ Definitions.CancelShipmentResponse;
            export type $503 = /* Response schema. */ Definitions.CancelShipmentResponse;
        }
    }
    namespace CompleteServiceJobByServiceJobId {
        namespace Responses {
            export type $200 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $400 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $403 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $404 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $413 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $415 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $422 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $429 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $500 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
            export type $503 = /* Response schema for CompleteServiceJobByServiceJobId operation. */ Definitions.CompleteServiceJobByServiceJobIdResponse;
        }
    }
    namespace ConfirmCustomizationDetails {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
            export type $400 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
            export type $403 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
            export type $404 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
            export type $413 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
            export type $415 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
            export type $429 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
            export type $500 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
            export type $503 = /* The response schema for the confirmCustomizationDetails operation. */ Definitions.CreateConfirmCustomizationDetailsResponse;
        }
    }
    namespace ConfirmPreorder {
        namespace Responses {
            export type $200 = /* The response schema for the confirmPreorder operation. */ Definitions.ConfirmPreorderResponse;
            export type $400 = /* The response schema for the confirmPreorder operation. */ Definitions.ConfirmPreorderResponse;
            export type $401 = /* The response schema for the confirmPreorder operation. */ Definitions.ConfirmPreorderResponse;
            export type $403 = /* The response schema for the confirmPreorder operation. */ Definitions.ConfirmPreorderResponse;
            export type $404 = /* The response schema for the confirmPreorder operation. */ Definitions.ConfirmPreorderResponse;
            export type $429 = /* The response schema for the confirmPreorder operation. */ Definitions.ConfirmPreorderResponse;
            export type $500 = /* The response schema for the confirmPreorder operation. */ Definitions.ConfirmPreorderResponse;
            export type $503 = /* The response schema for the confirmPreorder operation. */ Definitions.ConfirmPreorderResponse;
        }
    }
    namespace ConfirmTransport {
        namespace Responses {
            export type $200 = /* The response schema for the confirmTransport operation. */ Definitions.ConfirmTransportResponse;
            export type $400 = /* The response schema for the confirmTransport operation. */ Definitions.ConfirmTransportResponse;
            export type $401 = /* The response schema for the confirmTransport operation. */ Definitions.ConfirmTransportResponse;
            export type $403 = /* The response schema for the confirmTransport operation. */ Definitions.ConfirmTransportResponse;
            export type $404 = /* The response schema for the confirmTransport operation. */ Definitions.ConfirmTransportResponse;
            export type $429 = /* The response schema for the confirmTransport operation. */ Definitions.ConfirmTransportResponse;
            export type $500 = /* The response schema for the confirmTransport operation. */ Definitions.ConfirmTransportResponse;
            export type $503 = /* The response schema for the confirmTransport operation. */ Definitions.ConfirmTransportResponse;
        }
    }
    namespace CreateAmazonMotors {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
            export type $400 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
            export type $403 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
            export type $404 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
            export type $413 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
            export type $415 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
            export type $429 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
            export type $500 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
            export type $503 = /* The response schema for the createAmazonMotors operation. */ Definitions.CreateAmazonMotorsResponse;
        }
    }
    namespace CreateConfirmDeliveryDetails {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
            export type $400 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
            export type $403 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
            export type $404 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
            export type $413 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
            export type $415 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
            export type $429 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
            export type $500 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
            export type $503 = /* The response schema for the createConfirmDeliveryDetails operation. */ Definitions.CreateConfirmDeliveryDetailsResponse;
        }
    }
    namespace CreateConfirmOrderDetails {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
            export type $400 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
            export type $403 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
            export type $404 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
            export type $413 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
            export type $415 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
            export type $429 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
            export type $500 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
            export type $503 = /* The response schema for the createConfirmOrderDetails operation. */ Definitions.CreateConfirmOrderDetailsResponse;
        }
    }
    namespace CreateConfirmServiceDetails {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
            export type $400 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
            export type $403 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
            export type $404 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
            export type $413 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
            export type $415 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
            export type $429 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
            export type $500 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
            export type $503 = /* The response schema for the createConfirmServiceDetails operation. */ Definitions.CreateConfirmServiceDetailsResponse;
        }
    }
    namespace CreateDestination {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createDestination operation. */ Definitions.CreateDestinationRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $400 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $403 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $404 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $409 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $413 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $415 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $429 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $500 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
            export type $503 = /* The response schema for the createDestination operation. */ Definitions.CreateDestinationResponse;
        }
    }
    namespace CreateDigitalAccessKey {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
            export type $400 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
            export type $403 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
            export type $404 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
            export type $413 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
            export type $415 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
            export type $429 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
            export type $500 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
            export type $503 = /* The response schema for the createDigitalAccessKey operation. */ Definitions.CreateDigitalAccessKeyResponse;
        }
    }
    namespace CreateFeed {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.CreateFeedSpecification;
        }
        namespace Responses {
            export type $202 = /* Response schema. */ Definitions.CreateFeedResponse;
            export type $400 = /* Response schema. */ Definitions.CreateFeedResponse;
            export type $401 = /* Response schema. */ Definitions.CreateFeedResponse;
            export type $403 = /* Response schema. */ Definitions.CreateFeedResponse;
            export type $404 = /* Response schema. */ Definitions.CreateFeedResponse;
            export type $415 = /* Response schema. */ Definitions.CreateFeedResponse;
            export type $429 = /* Response schema. */ Definitions.CreateFeedResponse;
            export type $500 = /* Response schema. */ Definitions.CreateFeedResponse;
            export type $503 = /* Response schema. */ Definitions.CreateFeedResponse;
        }
    }
    namespace CreateFeedDocument {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.CreateFeedDocumentSpecification;
        }
        namespace Responses {
            export type $201 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
            export type $400 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
            export type $403 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
            export type $404 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
            export type $413 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
            export type $415 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
            export type $429 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
            export type $500 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
            export type $503 = /* The response for the createFeedDocument operation. */ Definitions.CreateFeedDocumentResponse;
        }
    }
    namespace CreateFulfillmentOrder {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request body schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderResponse;
            export type $400 = /* The response schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderResponse;
            export type $401 = /* The response schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderResponse;
            export type $403 = /* The response schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderResponse;
            export type $404 = /* The response schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderResponse;
            export type $429 = /* The response schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderResponse;
            export type $500 = /* The response schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderResponse;
            export type $503 = /* The response schema for the createFulfillmentOrder operation. */ Definitions.CreateFulfillmentOrderResponse;
        }
    }
    namespace CreateFulfillmentReturn {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The createFulfillmentReturn operation creates a fulfillment return for items that were fulfilled using the createFulfillmentOrder operation. For calls to createFulfillmentReturn, you must include ReturnReasonCode values returned by a previous call to the listReturnReasonCodes operation. */ Definitions.CreateFulfillmentReturnRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the createFulfillmentReturn operation. */ Definitions.CreateFulfillmentReturnResponse;
            export type $400 = /* The response schema for the createFulfillmentReturn operation. */ Definitions.CreateFulfillmentReturnResponse;
            export type $401 = /* The response schema for the createFulfillmentReturn operation. */ Definitions.CreateFulfillmentReturnResponse;
            export type $403 = /* The response schema for the createFulfillmentReturn operation. */ Definitions.CreateFulfillmentReturnResponse;
            export type $404 = /* The response schema for the createFulfillmentReturn operation. */ Definitions.CreateFulfillmentReturnResponse;
            export type $429 = /* The response schema for the createFulfillmentReturn operation. */ Definitions.CreateFulfillmentReturnResponse;
            export type $500 = /* The response schema for the createFulfillmentReturn operation. */ Definitions.CreateFulfillmentReturnResponse;
            export type $503 = /* The response schema for the createFulfillmentReturn operation. */ Definitions.CreateFulfillmentReturnResponse;
        }
    }
    namespace CreateInboundShipment {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for an inbound shipment. */ Definitions.InboundShipmentRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $400 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $401 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $403 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $404 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $429 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $500 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $503 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
        }
    }
    namespace CreateInboundShipmentPlan {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanResponse;
            export type $400 = /* The response schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanResponse;
            export type $401 = /* The response schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanResponse;
            export type $403 = /* The response schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanResponse;
            export type $404 = /* The response schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanResponse;
            export type $429 = /* The response schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanResponse;
            export type $500 = /* The response schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanResponse;
            export type $503 = /* The response schema for the createInboundShipmentPlan operation. */ Definitions.CreateInboundShipmentPlanResponse;
        }
    }
    namespace CreateLegalDisclosure {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
            export type $400 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
            export type $403 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
            export type $404 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
            export type $413 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
            export type $415 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
            export type $429 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
            export type $500 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
            export type $503 = /* The response schema for the createLegalDisclosure operation. */ Definitions.CreateLegalDisclosureResponse;
        }
    }
    namespace CreateNegativeFeedbackRemoval {
        namespace Responses {
            export type $201 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
            export type $400 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
            export type $403 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
            export type $404 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
            export type $413 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
            export type $415 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
            export type $429 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
            export type $500 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
            export type $503 = /* The response schema for the createNegativeFeedbackRemoval operation. */ Definitions.CreateNegativeFeedbackRemovalResponse;
        }
    }
    namespace CreateProductReviewAndSellerFeedbackSolicitation {
        namespace Responses {
            export type $201 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
            export type $400 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
            export type $403 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
            export type $404 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
            export type $413 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
            export type $415 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
            export type $429 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
            export type $500 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
            export type $503 = /* The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */ Definitions.CreateProductReviewAndSellerFeedbackSolicitationResponse;
        }
    }
    namespace CreateReport {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.CreateReportSpecification;
        }
        namespace Responses {
            export type $202 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
            export type $400 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
            export type $401 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
            export type $403 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
            export type $404 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
            export type $415 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
            export type $429 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
            export type $500 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
            export type $503 = /* The response for the createReport operation. */ Definitions.CreateReportResponse;
        }
    }
    namespace CreateReportSchedule {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.CreateReportScheduleSpecification;
        }
        namespace Responses {
            export type $201 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
            export type $400 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
            export type $401 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
            export type $403 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
            export type $404 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
            export type $415 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
            export type $429 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
            export type $500 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
            export type $503 = /* The response for the createReportSchedule operation. */ Definitions.CreateReportScheduleResponse;
        }
    }
    namespace CreateShipment {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Request schema. */ Definitions.CreateShipmentRequest;
        }
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.CreateShipmentResponse;
            export type $400 = /* Response schema. */ Definitions.CreateShipmentResponse;
            export type $401 = /* Response schema. */ Definitions.CreateShipmentResponse;
            export type $403 = /* Response schema. */ Definitions.CreateShipmentResponse;
            export type $404 = /* Response schema. */ Definitions.CreateShipmentResponse;
            export type $429 = /* Response schema. */ Definitions.CreateShipmentResponse;
            export type $500 = /* Response schema. */ Definitions.CreateShipmentResponse;
            export type $503 = /* Response schema. */ Definitions.CreateShipmentResponse;
        }
    }
    namespace CreateSubscription {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createSubscription operation. */ Definitions.CreateSubscriptionRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $400 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $403 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $404 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $409 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $413 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $415 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $429 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $500 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
            export type $503 = /* The response schema for the createSubscription operation. */ Definitions.CreateSubscriptionResponse;
        }
    }
    namespace CreateUnexpectedProblem {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
            export type $400 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
            export type $403 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
            export type $404 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
            export type $413 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
            export type $415 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
            export type $429 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
            export type $500 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
            export type $503 = /* The response schema for the createUnexpectedProblem operation. */ Definitions.CreateUnexpectedProblemResponse;
        }
    }
    namespace CreateUploadDestinationForResource {
        namespace Responses {
            export type $201 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
            export type $400 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
            export type $403 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
            export type $404 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
            export type $413 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
            export type $415 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
            export type $429 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
            export type $500 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
            export type $503 = /* The response schema for the createUploadDestination operation. */ Definitions.CreateUploadDestinationResponse;
        }
    }
    namespace CreateWarranty {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for the createWarranty operation. */ Definitions.CreateWarrantyRequest;
        }
        namespace Responses {
            export type $201 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
            export type $400 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
            export type $403 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
            export type $404 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
            export type $413 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
            export type $415 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
            export type $429 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
            export type $500 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
            export type $503 = /* The response schema for the createWarranty operation. */ Definitions.CreateWarrantyResponse;
        }
    }
    namespace DeleteDestination {
        namespace Responses {
            export type $200 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $400 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $403 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $404 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $409 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $413 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $415 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $429 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $500 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
            export type $503 = /* The response schema for the deleteDestination operation. */ Definitions.DeleteDestinationResponse;
        }
    }
    namespace DeleteSmallAndLightEnrollmentBySellerSKU {
        namespace Responses {
            export type $400 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $403 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $404 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $413 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $415 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $429 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $500 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $503 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
        }
    }
    namespace DeleteSubscriptionById {
        namespace Responses {
            export type $200 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $400 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $403 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $404 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $409 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $413 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $415 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $429 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $500 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
            export type $503 = /* The response schema for the deleteSubscriptionById operation. */ Definitions.DeleteSubscriptionByIdResponse;
        }
    }
    namespace EstimateTransport {
        namespace Responses {
            export type $200 = /* The response schema for the estimateTransport operation. */ Definitions.EstimateTransportResponse;
            export type $400 = /* The response schema for the estimateTransport operation. */ Definitions.EstimateTransportResponse;
            export type $401 = /* The response schema for the estimateTransport operation. */ Definitions.EstimateTransportResponse;
            export type $403 = /* The response schema for the estimateTransport operation. */ Definitions.EstimateTransportResponse;
            export type $404 = /* The response schema for the estimateTransport operation. */ Definitions.EstimateTransportResponse;
            export type $429 = /* The response schema for the estimateTransport operation. */ Definitions.EstimateTransportResponse;
            export type $500 = /* The response schema for the estimateTransport operation. */ Definitions.EstimateTransportResponse;
            export type $503 = /* The response schema for the estimateTransport operation. */ Definitions.EstimateTransportResponse;
        }
    }
    namespace GetAccount {
        namespace Responses {
            export type $200 = /* The response schema for the getAccount operation. */ Definitions.GetAccountResponse;
            export type $400 = /* The response schema for the getAccount operation. */ Definitions.GetAccountResponse;
            export type $401 = /* The response schema for the getAccount operation. */ Definitions.GetAccountResponse;
            export type $403 = /* The response schema for the getAccount operation. */ Definitions.GetAccountResponse;
            export type $404 = /* The response schema for the getAccount operation. */ Definitions.GetAccountResponse;
            export type $429 = /* The response schema for the getAccount operation. */ Definitions.GetAccountResponse;
            export type $500 = /* The response schema for the getAccount operation. */ Definitions.GetAccountResponse;
            export type $503 = /* The response schema for the getAccount operation. */ Definitions.GetAccountResponse;
        }
    }
    namespace GetAdditionalSellerInputs {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Request schema. */ Definitions.GetAdditionalSellerInputsRequest;
        }
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $400 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $401 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $403 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $404 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $429 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $500 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $503 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
        }
    }
    namespace GetAdditionalSellerInputsOld {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Request schema. */ Definitions.GetAdditionalSellerInputsRequest;
        }
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $400 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $401 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $403 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $404 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $429 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $500 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
            export type $503 = /* Response schema. */ Definitions.GetAdditionalSellerInputsResponse;
        }
    }
    namespace GetAttributes {
        namespace Responses {
            export type $200 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
            export type $400 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
            export type $403 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
            export type $404 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
            export type $413 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
            export type $415 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
            export type $429 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
            export type $500 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
            export type $503 = /* The response schema for the GetAttributes operation. */ Definitions.GetAttributesResponse;
        }
    }
    namespace GetAuthorizationCode {
        namespace Responses {
            export type $200 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
            export type $400 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
            export type $403 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
            export type $404 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
            export type $413 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
            export type $415 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
            export type $429 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
            export type $500 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
            export type $503 = /* The response schema for the GetAuthorizationCode operation. */ Definitions.GetAuthorizationCodeResponse;
        }
    }
    namespace GetBillOfLading {
        namespace Responses {
            export type $200 = /* The response schema for the getBillOfLading operation. */ Definitions.GetBillOfLadingResponse;
            export type $400 = /* The response schema for the getBillOfLading operation. */ Definitions.GetBillOfLadingResponse;
            export type $401 = /* The response schema for the getBillOfLading operation. */ Definitions.GetBillOfLadingResponse;
            export type $403 = /* The response schema for the getBillOfLading operation. */ Definitions.GetBillOfLadingResponse;
            export type $404 = /* The response schema for the getBillOfLading operation. */ Definitions.GetBillOfLadingResponse;
            export type $429 = /* The response schema for the getBillOfLading operation. */ Definitions.GetBillOfLadingResponse;
            export type $500 = /* The response schema for the getBillOfLading operation. */ Definitions.GetBillOfLadingResponse;
            export type $503 = /* The response schema for the getBillOfLading operation. */ Definitions.GetBillOfLadingResponse;
        }
    }
    namespace GetCatalogItem {
        namespace Responses {
            export type $200 = Definitions.GetCatalogItemResponse;
            export type $400 = Definitions.GetCatalogItemResponse;
            export type $401 = Definitions.GetCatalogItemResponse;
            export type $403 = Definitions.GetCatalogItemResponse;
            export type $404 = Definitions.GetCatalogItemResponse;
            export type $429 = Definitions.GetCatalogItemResponse;
            export type $500 = Definitions.GetCatalogItemResponse;
            export type $503 = Definitions.GetCatalogItemResponse;
        }
    }
    namespace GetCompetitivePricing {
        namespace Responses {
            export type $200 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $400 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $401 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $403 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $404 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $429 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $500 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $503 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
        }
    }
    namespace GetDestination {
        namespace Responses {
            export type $200 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $400 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $403 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $404 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $409 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $413 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $415 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $429 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $500 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
            export type $503 = /* The response schema for the getDestination operation. */ Definitions.GetDestinationResponse;
        }
    }
    namespace GetDestinations {
        namespace Responses {
            export type $200 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $400 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $403 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $404 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $409 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $413 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $415 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $429 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $500 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
            export type $503 = /* The response schema for the getDestinations operation. */ Definitions.GetDestinationsResponse;
        }
    }
    namespace GetEligibleShipmentServices {
        export interface BodyParameters {
            body: /* Request schema. */ Parameters.Body;
        }
        namespace Parameters {
            /**
             * Request schema.
             */
            export type Body = /* Request schema. */ Definitions.GetEligibleShipmentServicesRequest;
        }
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $400 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $401 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $403 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $404 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $429 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $500 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $503 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
        }
    }
    namespace GetEligibleShipmentServicesOld {
        export interface BodyParameters {
            body: /* Request schema. */ Parameters.Body;
        }
        namespace Parameters {
            /**
             * Request schema.
             */
            export type Body = /* Request schema. */ Definitions.GetEligibleShipmentServicesRequest;
        }
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $400 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $401 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $403 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $404 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $429 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $500 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
            export type $503 = /* Response schema. */ Definitions.GetEligibleShipmentServicesResponse;
        }
    }
    namespace GetFeatureInventory {
        namespace Responses {
            export type $200 = /* The breakdown of eligibility inventory by feature. */ Definitions.GetFeatureInventoryResponse;
            export type $400 = /* The breakdown of eligibility inventory by feature. */ Definitions.GetFeatureInventoryResponse;
            export type $401 = /* The breakdown of eligibility inventory by feature. */ Definitions.GetFeatureInventoryResponse;
            export type $403 = /* The breakdown of eligibility inventory by feature. */ Definitions.GetFeatureInventoryResponse;
            export type $404 = /* The breakdown of eligibility inventory by feature. */ Definitions.GetFeatureInventoryResponse;
            export type $429 = /* The breakdown of eligibility inventory by feature. */ Definitions.GetFeatureInventoryResponse;
            export type $500 = /* The breakdown of eligibility inventory by feature. */ Definitions.GetFeatureInventoryResponse;
            export type $503 = /* The breakdown of eligibility inventory by feature. */ Definitions.GetFeatureInventoryResponse;
        }
    }
    namespace GetFeatureSKU {
        namespace Responses {
            export type $200 = /* The response schema for the getFeatureSKU operation. */ Definitions.GetFeatureSkuResponse;
            export type $400 = /* The response schema for the getFeatureSKU operation. */ Definitions.GetFeatureSkuResponse;
            export type $401 = /* The response schema for the getFeatureSKU operation. */ Definitions.GetFeatureSkuResponse;
            export type $403 = /* The response schema for the getFeatureSKU operation. */ Definitions.GetFeatureSkuResponse;
            export type $404 = /* The response schema for the getFeatureSKU operation. */ Definitions.GetFeatureSkuResponse;
            export type $429 = /* The response schema for the getFeatureSKU operation. */ Definitions.GetFeatureSkuResponse;
            export type $500 = /* The response schema for the getFeatureSKU operation. */ Definitions.GetFeatureSkuResponse;
            export type $503 = /* The response schema for the getFeatureSKU operation. */ Definitions.GetFeatureSkuResponse;
        }
    }
    namespace GetFeatures {
        namespace Responses {
            export type $200 = /* The response schema for the getFeatures operation. */ Definitions.GetFeaturesResponse;
            export type $400 = /* The response schema for the getFeatures operation. */ Definitions.GetFeaturesResponse;
            export type $401 = /* The response schema for the getFeatures operation. */ Definitions.GetFeaturesResponse;
            export type $403 = /* The response schema for the getFeatures operation. */ Definitions.GetFeaturesResponse;
            export type $404 = /* The response schema for the getFeatures operation. */ Definitions.GetFeaturesResponse;
            export type $429 = /* The response schema for the getFeatures operation. */ Definitions.GetFeaturesResponse;
            export type $500 = /* The response schema for the getFeatures operation. */ Definitions.GetFeaturesResponse;
            export type $503 = /* The response schema for the getFeatures operation. */ Definitions.GetFeaturesResponse;
        }
    }
    namespace GetFeed {
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetFeedResponse;
            export type $400 = /* Response schema. */ Definitions.GetFeedResponse;
            export type $401 = /* Response schema. */ Definitions.GetFeedResponse;
            export type $403 = /* Response schema. */ Definitions.GetFeedResponse;
            export type $404 = /* Response schema. */ Definitions.GetFeedResponse;
            export type $415 = /* Response schema. */ Definitions.GetFeedResponse;
            export type $429 = /* Response schema. */ Definitions.GetFeedResponse;
            export type $500 = /* Response schema. */ Definitions.GetFeedResponse;
            export type $503 = /* Response schema. */ Definitions.GetFeedResponse;
        }
    }
    namespace GetFeedDocument {
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
            export type $400 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
            export type $401 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
            export type $403 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
            export type $404 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
            export type $415 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
            export type $429 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
            export type $500 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
            export type $503 = /* Response schema. */ Definitions.GetFeedDocumentResponse;
        }
    }
    namespace GetFeeds {
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetFeedsResponse;
            export type $400 = /* Response schema. */ Definitions.GetFeedsResponse;
            export type $401 = /* Response schema. */ Definitions.GetFeedsResponse;
            export type $403 = /* Response schema. */ Definitions.GetFeedsResponse;
            export type $404 = /* Response schema. */ Definitions.GetFeedsResponse;
            export type $415 = /* Response schema. */ Definitions.GetFeedsResponse;
            export type $429 = /* Response schema. */ Definitions.GetFeedsResponse;
            export type $500 = /* Response schema. */ Definitions.GetFeedsResponse;
            export type $503 = /* Response schema. */ Definitions.GetFeedsResponse;
        }
    }
    namespace GetFulfillmentOrder {
        namespace Responses {
            export type $200 = /* The response schema for the getFulfillmentOrder operation. */ Definitions.GetFulfillmentOrderResponse;
            export type $400 = /* The response schema for the getFulfillmentOrder operation. */ Definitions.GetFulfillmentOrderResponse;
            export type $401 = /* The response schema for the getFulfillmentOrder operation. */ Definitions.GetFulfillmentOrderResponse;
            export type $403 = /* The response schema for the getFulfillmentOrder operation. */ Definitions.GetFulfillmentOrderResponse;
            export type $404 = /* The response schema for the getFulfillmentOrder operation. */ Definitions.GetFulfillmentOrderResponse;
            export type $429 = /* The response schema for the getFulfillmentOrder operation. */ Definitions.GetFulfillmentOrderResponse;
            export type $500 = /* The response schema for the getFulfillmentOrder operation. */ Definitions.GetFulfillmentOrderResponse;
            export type $503 = /* The response schema for the getFulfillmentOrder operation. */ Definitions.GetFulfillmentOrderResponse;
        }
    }
    namespace GetFulfillmentPreview {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request body schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewResponse;
            export type $400 = /* The response schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewResponse;
            export type $401 = /* The response schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewResponse;
            export type $403 = /* The response schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewResponse;
            export type $404 = /* The response schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewResponse;
            export type $429 = /* The response schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewResponse;
            export type $500 = /* The response schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewResponse;
            export type $503 = /* The response schema for the getFulfillmentPreview operation. */ Definitions.GetFulfillmentPreviewResponse;
        }
    }
    namespace GetInboundGuidance {
        namespace Responses {
            export type $200 = /* The response schema for the getInboundGuidance operation. */ Definitions.GetInboundGuidanceResponse;
            export type $400 = /* The response schema for the getInboundGuidance operation. */ Definitions.GetInboundGuidanceResponse;
            export type $401 = /* The response schema for the getInboundGuidance operation. */ Definitions.GetInboundGuidanceResponse;
            export type $403 = /* The response schema for the getInboundGuidance operation. */ Definitions.GetInboundGuidanceResponse;
            export type $404 = /* The response schema for the getInboundGuidance operation. */ Definitions.GetInboundGuidanceResponse;
            export type $429 = /* The response schema for the getInboundGuidance operation. */ Definitions.GetInboundGuidanceResponse;
            export type $500 = /* The response schema for the getInboundGuidance operation. */ Definitions.GetInboundGuidanceResponse;
            export type $503 = /* The response schema for the getInboundGuidance operation. */ Definitions.GetInboundGuidanceResponse;
        }
    }
    namespace GetInventorySummaries {
        namespace Responses {
            export type $200 = /* The Response schema. */ Definitions.GetInventorySummariesResponse;
            export type $400 = /* The Response schema. */ Definitions.GetInventorySummariesResponse;
            export type $403 = /* The Response schema. */ Definitions.GetInventorySummariesResponse;
            export type $404 = /* The Response schema. */ Definitions.GetInventorySummariesResponse;
            export type $429 = /* The Response schema. */ Definitions.GetInventorySummariesResponse;
            export type $500 = /* The Response schema. */ Definitions.GetInventorySummariesResponse;
            export type $503 = /* The Response schema. */ Definitions.GetInventorySummariesResponse;
        }
    }
    namespace GetItemEligibilityPreview {
        namespace Responses {
            export type $200 = /* The response schema for the getItemEligibilityPreview operation. */ Definitions.GetItemEligibilityPreviewResponse;
            export type $400 = /* The response schema for the getItemEligibilityPreview operation. */ Definitions.GetItemEligibilityPreviewResponse;
            export type $401 = /* The response schema for the getItemEligibilityPreview operation. */ Definitions.GetItemEligibilityPreviewResponse;
            export type $403 = /* The response schema for the getItemEligibilityPreview operation. */ Definitions.GetItemEligibilityPreviewResponse;
            export type $404 = /* The response schema for the getItemEligibilityPreview operation. */ Definitions.GetItemEligibilityPreviewResponse;
            export type $429 = /* The response schema for the getItemEligibilityPreview operation. */ Definitions.GetItemEligibilityPreviewResponse;
            export type $500 = /* The response schema for the getItemEligibilityPreview operation. */ Definitions.GetItemEligibilityPreviewResponse;
            export type $503 = /* The response schema for the getItemEligibilityPreview operation. */ Definitions.GetItemEligibilityPreviewResponse;
        }
    }
    namespace GetItemOffers {
        namespace Responses {
            export type $200 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $400 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $401 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $403 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $404 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $429 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $500 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $503 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
        }
    }
    namespace GetLabels {
        namespace Responses {
            export type $200 = /* The response schema for the getLabels operation. */ Definitions.GetLabelsResponse;
            export type $400 = /* The response schema for the getLabels operation. */ Definitions.GetLabelsResponse;
            export type $401 = /* The response schema for the getLabels operation. */ Definitions.GetLabelsResponse;
            export type $403 = /* The response schema for the getLabels operation. */ Definitions.GetLabelsResponse;
            export type $404 = /* The response schema for the getLabels operation. */ Definitions.GetLabelsResponse;
            export type $429 = /* The response schema for the getLabels operation. */ Definitions.GetLabelsResponse;
            export type $500 = /* The response schema for the getLabels operation. */ Definitions.GetLabelsResponse;
            export type $503 = /* The response schema for the getLabels operation. */ Definitions.GetLabelsResponse;
        }
    }
    namespace GetListingOffers {
        namespace Responses {
            export type $200 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $400 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $401 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $403 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $404 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $429 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $500 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
            export type $503 = /* The response schema for the getListingOffers and getItemOffers operations. */ Definitions.GetOffersResponse;
        }
    }
    namespace GetMarketplaceParticipations {
        namespace Responses {
            export type $200 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
            export type $400 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
            export type $403 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
            export type $404 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
            export type $413 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
            export type $415 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
            export type $429 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
            export type $500 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
            export type $503 = /* The response schema for the getMarketplaceParticipations operation. */ Definitions.GetMarketplaceParticipationsResponse;
        }
    }
    namespace GetMessagingActionsForOrder {
        namespace Responses {
            export type $200 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
            export type $400 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
            export type $403 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
            export type $404 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
            export type $413 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
            export type $415 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
            export type $429 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
            export type $500 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
            export type $503 = /* The response schema for the getMessagingActionsForOrder operation. */ Definitions.GetMessagingActionsForOrderResponse;
        }
    }
    namespace GetMyFeesEstimateForASIN {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Request schema. */ Definitions.GetMyFeesEstimateRequest;
        }
        namespace Responses {
            export type $200 = Definitions.GetMyFeesEstimateResponse;
            export type $400 = Definitions.GetMyFeesEstimateResponse;
            export type $401 = Definitions.GetMyFeesEstimateResponse;
            export type $403 = Definitions.GetMyFeesEstimateResponse;
            export type $404 = Definitions.GetMyFeesEstimateResponse;
            export type $429 = Definitions.GetMyFeesEstimateResponse;
            export type $500 = Definitions.GetMyFeesEstimateResponse;
            export type $503 = Definitions.GetMyFeesEstimateResponse;
        }
    }
    namespace GetMyFeesEstimateForSKU {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Request schema. */ Definitions.GetMyFeesEstimateRequest;
        }
        namespace Responses {
            export type $200 = Definitions.GetMyFeesEstimateResponse;
            export type $400 = Definitions.GetMyFeesEstimateResponse;
            export type $401 = Definitions.GetMyFeesEstimateResponse;
            export type $403 = Definitions.GetMyFeesEstimateResponse;
            export type $404 = Definitions.GetMyFeesEstimateResponse;
            export type $429 = Definitions.GetMyFeesEstimateResponse;
            export type $500 = Definitions.GetMyFeesEstimateResponse;
            export type $503 = Definitions.GetMyFeesEstimateResponse;
        }
    }
    namespace GetOrder {
        namespace Responses {
            export type $200 = /* The response schema for the getOrder operation. */ Definitions.GetOrderResponse;
            export type $400 = /* The response schema for the getOrder operation. */ Definitions.GetOrderResponse;
            export type $403 = /* The response schema for the getOrder operation. */ Definitions.GetOrderResponse;
            export type $404 = /* The response schema for the getOrder operation. */ Definitions.GetOrderResponse;
            export type $429 = /* The response schema for the getOrder operation. */ Definitions.GetOrderResponse;
            export type $500 = /* The response schema for the getOrder operation. */ Definitions.GetOrderResponse;
            export type $503 = /* The response schema for the getOrder operation. */ Definitions.GetOrderResponse;
        }
    }
    namespace GetOrderAddress {
        namespace Responses {
            export type $200 = /* The response schema for the getOrderAddress operation. */ Definitions.GetOrderAddressResponse;
            export type $400 = /* The response schema for the getOrderAddress operation. */ Definitions.GetOrderAddressResponse;
            export type $403 = /* The response schema for the getOrderAddress operation. */ Definitions.GetOrderAddressResponse;
            export type $404 = /* The response schema for the getOrderAddress operation. */ Definitions.GetOrderAddressResponse;
            export type $429 = /* The response schema for the getOrderAddress operation. */ Definitions.GetOrderAddressResponse;
            export type $500 = /* The response schema for the getOrderAddress operation. */ Definitions.GetOrderAddressResponse;
            export type $503 = /* The response schema for the getOrderAddress operation. */ Definitions.GetOrderAddressResponse;
        }
    }
    namespace GetOrderBuyerInfo {
        namespace Responses {
            export type $200 = /* The response schema for the getOrderBuyerInfo operation. */ Definitions.GetOrderBuyerInfoResponse;
            export type $400 = /* The response schema for the getOrderBuyerInfo operation. */ Definitions.GetOrderBuyerInfoResponse;
            export type $403 = /* The response schema for the getOrderBuyerInfo operation. */ Definitions.GetOrderBuyerInfoResponse;
            export type $404 = /* The response schema for the getOrderBuyerInfo operation. */ Definitions.GetOrderBuyerInfoResponse;
            export type $429 = /* The response schema for the getOrderBuyerInfo operation. */ Definitions.GetOrderBuyerInfoResponse;
            export type $500 = /* The response schema for the getOrderBuyerInfo operation. */ Definitions.GetOrderBuyerInfoResponse;
            export type $503 = /* The response schema for the getOrderBuyerInfo operation. */ Definitions.GetOrderBuyerInfoResponse;
        }
    }
    namespace GetOrderItems {
        namespace Responses {
            export type $200 = /* The response schema for the getOrderItems operation. */ Definitions.GetOrderItemsResponse;
            export type $400 = /* The response schema for the getOrderItems operation. */ Definitions.GetOrderItemsResponse;
            export type $403 = /* The response schema for the getOrderItems operation. */ Definitions.GetOrderItemsResponse;
            export type $404 = /* The response schema for the getOrderItems operation. */ Definitions.GetOrderItemsResponse;
            export type $429 = /* The response schema for the getOrderItems operation. */ Definitions.GetOrderItemsResponse;
            export type $500 = /* The response schema for the getOrderItems operation. */ Definitions.GetOrderItemsResponse;
            export type $503 = /* The response schema for the getOrderItems operation. */ Definitions.GetOrderItemsResponse;
        }
    }
    namespace GetOrderItemsBuyerInfo {
        namespace Responses {
            export type $200 = /* The response schema for the getOrderItemsBuyerInfo operation. */ Definitions.GetOrderItemsBuyerInfoResponse;
            export type $400 = /* The response schema for the getOrderItemsBuyerInfo operation. */ Definitions.GetOrderItemsBuyerInfoResponse;
            export type $403 = /* The response schema for the getOrderItemsBuyerInfo operation. */ Definitions.GetOrderItemsBuyerInfoResponse;
            export type $404 = /* The response schema for the getOrderItemsBuyerInfo operation. */ Definitions.GetOrderItemsBuyerInfoResponse;
            export type $429 = /* The response schema for the getOrderItemsBuyerInfo operation. */ Definitions.GetOrderItemsBuyerInfoResponse;
            export type $500 = /* The response schema for the getOrderItemsBuyerInfo operation. */ Definitions.GetOrderItemsBuyerInfoResponse;
            export type $503 = /* The response schema for the getOrderItemsBuyerInfo operation. */ Definitions.GetOrderItemsBuyerInfoResponse;
        }
    }
    namespace GetOrderMetrics {
        namespace Responses {
            export type $200 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
            export type $400 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
            export type $403 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
            export type $404 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
            export type $413 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
            export type $415 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
            export type $429 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
            export type $500 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
            export type $503 = /* The response schema for the getOrderMetrics operation. */ Definitions.GetOrderMetricsResponse;
        }
    }
    namespace GetOrders {
        namespace Responses {
            export type $200 = /* The response schema for the getOrders operation. */ Definitions.GetOrdersResponse;
            export type $400 = /* The response schema for the getOrders operation. */ Definitions.GetOrdersResponse;
            export type $403 = /* The response schema for the getOrders operation. */ Definitions.GetOrdersResponse;
            export type $404 = /* The response schema for the getOrders operation. */ Definitions.GetOrdersResponse;
            export type $429 = /* The response schema for the getOrders operation. */ Definitions.GetOrdersResponse;
            export type $500 = /* The response schema for the getOrders operation. */ Definitions.GetOrdersResponse;
            export type $503 = /* The response schema for the getOrders operation. */ Definitions.GetOrdersResponse;
        }
    }
    namespace GetPackageTrackingDetails {
        namespace Responses {
            export type $200 = /* The response schema for the getPackageTrackingDetails operation. */ Definitions.GetPackageTrackingDetailsResponse;
            export type $400 = /* The response schema for the getPackageTrackingDetails operation. */ Definitions.GetPackageTrackingDetailsResponse;
            export type $401 = /* The response schema for the getPackageTrackingDetails operation. */ Definitions.GetPackageTrackingDetailsResponse;
            export type $403 = /* The response schema for the getPackageTrackingDetails operation. */ Definitions.GetPackageTrackingDetailsResponse;
            export type $404 = /* The response schema for the getPackageTrackingDetails operation. */ Definitions.GetPackageTrackingDetailsResponse;
            export type $429 = /* The response schema for the getPackageTrackingDetails operation. */ Definitions.GetPackageTrackingDetailsResponse;
            export type $500 = /* The response schema for the getPackageTrackingDetails operation. */ Definitions.GetPackageTrackingDetailsResponse;
            export type $503 = /* The response schema for the getPackageTrackingDetails operation. */ Definitions.GetPackageTrackingDetailsResponse;
        }
    }
    namespace GetPreorderInfo {
        namespace Responses {
            export type $200 = /* The response schema for the getPreorderInfo operation. */ Definitions.GetPreorderInfoResponse;
            export type $400 = /* The response schema for the getPreorderInfo operation. */ Definitions.GetPreorderInfoResponse;
            export type $401 = /* The response schema for the getPreorderInfo operation. */ Definitions.GetPreorderInfoResponse;
            export type $403 = /* The response schema for the getPreorderInfo operation. */ Definitions.GetPreorderInfoResponse;
            export type $404 = /* The response schema for the getPreorderInfo operation. */ Definitions.GetPreorderInfoResponse;
            export type $429 = /* The response schema for the getPreorderInfo operation. */ Definitions.GetPreorderInfoResponse;
            export type $500 = /* The response schema for the getPreorderInfo operation. */ Definitions.GetPreorderInfoResponse;
            export type $503 = /* The response schema for the getPreorderInfo operation. */ Definitions.GetPreorderInfoResponse;
        }
    }
    namespace GetPrepInstructions {
        namespace Responses {
            export type $200 = /* The response schema for the getPrepInstructions operation. */ Definitions.GetPrepInstructionsResponse;
            export type $400 = /* The response schema for the getPrepInstructions operation. */ Definitions.GetPrepInstructionsResponse;
            export type $401 = /* The response schema for the getPrepInstructions operation. */ Definitions.GetPrepInstructionsResponse;
            export type $403 = /* The response schema for the getPrepInstructions operation. */ Definitions.GetPrepInstructionsResponse;
            export type $404 = /* The response schema for the getPrepInstructions operation. */ Definitions.GetPrepInstructionsResponse;
            export type $429 = /* The response schema for the getPrepInstructions operation. */ Definitions.GetPrepInstructionsResponse;
            export type $500 = /* The response schema for the getPrepInstructions operation. */ Definitions.GetPrepInstructionsResponse;
            export type $503 = /* The response schema for the getPrepInstructions operation. */ Definitions.GetPrepInstructionsResponse;
        }
    }
    namespace GetPricing {
        namespace Responses {
            export type $200 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $400 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $401 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $403 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $404 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $429 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $500 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
            export type $503 = /* The response schema for the getPricing and getCompetitivePricing operations. */ Definitions.GetPricingResponse;
        }
    }
    namespace GetRates {
        export interface BodyParameters {
            body: /**
             * example:
             * {
             *   "shipFrom": {
             *     "name": "test name 1",
             *     "addressLine1": "some Test address 1",
             *     "postalCode": "90013",
             *     "city": "Los Angeles",
             *     "countryCode": "US",
             *     "stateOrRegion": "CA"
             *   },
             *   "shipTo": {
             *     "name": "test name 2",
             *     "addressLine1": "some Test address 2",
             *     "postalCode": "90013",
             *     "city": "Los Angeles",
             *     "countryCode": "US",
             *     "stateOrRegion": "CA"
             *   },
             *   "containerSpecifications": [
             *     {
             *       "dimensions": {
             *         "height": 12,
             *         "length": 36,
             *         "width": 15,
             *         "unit": "CM"
             *       },
             *       "weight": {
             *         "unit": "lb",
             *         "value": 0.08164656
             *       }
             *     }
             *   ],
             *   "serviceTypes": [
             *     "Amazon Shipping Standard"
             *   ]
             * }
             */
            Parameters.Body;
        }
        namespace Parameters {
            /**
             * example:
             * {
             *   "shipFrom": {
             *     "name": "test name 1",
             *     "addressLine1": "some Test address 1",
             *     "postalCode": "90013",
             *     "city": "Los Angeles",
             *     "countryCode": "US",
             *     "stateOrRegion": "CA"
             *   },
             *   "shipTo": {
             *     "name": "test name 2",
             *     "addressLine1": "some Test address 2",
             *     "postalCode": "90013",
             *     "city": "Los Angeles",
             *     "countryCode": "US",
             *     "stateOrRegion": "CA"
             *   },
             *   "containerSpecifications": [
             *     {
             *       "dimensions": {
             *         "height": 12,
             *         "length": 36,
             *         "width": 15,
             *         "unit": "CM"
             *       },
             *       "weight": {
             *         "unit": "lb",
             *         "value": 0.08164656
             *       }
             *     }
             *   ],
             *   "serviceTypes": [
             *     "Amazon Shipping Standard"
             *   ]
             * }
             */
            export type Body = /* The payload schema for the getRates operation. */ Definitions.GetRatesRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the getRates operation. */ Definitions.GetRatesResponse;
            export type $400 = /* The response schema for the getRates operation. */ Definitions.GetRatesResponse;
            export type $401 = /* The response schema for the getRates operation. */ Definitions.GetRatesResponse;
            export type $403 = /* The response schema for the getRates operation. */ Definitions.GetRatesResponse;
            export type $404 = /* The response schema for the getRates operation. */ Definitions.GetRatesResponse;
            export type $429 = /* The response schema for the getRates operation. */ Definitions.GetRatesResponse;
            export type $500 = /* The response schema for the getRates operation. */ Definitions.GetRatesResponse;
            export type $503 = /* The response schema for the getRates operation. */ Definitions.GetRatesResponse;
        }
    }
    namespace GetReport {
        namespace Responses {
            export type $200 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
            export type $400 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
            export type $401 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
            export type $403 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
            export type $404 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
            export type $415 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
            export type $429 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
            export type $500 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
            export type $503 = /* The response for the getReport operation. */ Definitions.GetReportResponse;
        }
    }
    namespace GetReportDocument {
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetReportDocumentResponse;
            export type $400 = /* Response schema. */ Definitions.GetReportDocumentResponse;
            export type $401 = /* Response schema. */ Definitions.GetReportDocumentResponse;
            export type $403 = /* Response schema. */ Definitions.GetReportDocumentResponse;
            export type $404 = /* Response schema. */ Definitions.GetReportDocumentResponse;
            export type $415 = /* Response schema. */ Definitions.GetReportDocumentResponse;
            export type $429 = /* Response schema. */ Definitions.GetReportDocumentResponse;
            export type $500 = /* Response schema. */ Definitions.GetReportDocumentResponse;
            export type $503 = /* Response schema. */ Definitions.GetReportDocumentResponse;
        }
    }
    namespace GetReportSchedule {
        namespace Responses {
            export type $200 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
            export type $400 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
            export type $401 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
            export type $403 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
            export type $404 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
            export type $415 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
            export type $429 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
            export type $500 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
            export type $503 = /* The response for the getReportSchedule operation. */ Definitions.GetReportScheduleResponse;
        }
    }
    namespace GetReportSchedules {
        namespace Responses {
            export type $200 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
            export type $400 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
            export type $401 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
            export type $403 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
            export type $404 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
            export type $415 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
            export type $429 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
            export type $500 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
            export type $503 = /* The response for the getReportSchedules operation. */ Definitions.GetReportSchedulesResponse;
        }
    }
    namespace GetReports {
        namespace Responses {
            export type $200 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
            export type $400 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
            export type $401 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
            export type $403 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
            export type $404 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
            export type $415 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
            export type $429 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
            export type $500 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
            export type $503 = /* The response for the getReports operation. */ Definitions.GetReportsResponse;
        }
    }
    namespace GetServiceJobByServiceJobId {
        namespace Responses {
            export type $200 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $400 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $403 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $404 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $413 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $415 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $422 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $429 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $500 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
            export type $503 = /* The response schema for the GetServiceJobByServiceJobId operation. */ Definitions.GetServiceJobByServiceJobIdResponse;
        }
    }
    namespace GetServiceJobs {
        namespace Responses {
            export type $200 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
            export type $400 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
            export type $403 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
            export type $404 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
            export type $413 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
            export type $415 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
            export type $429 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
            export type $500 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
            export type $503 = /* Response schema for GetJobs operation. */ Definitions.GetServiceJobsResponse;
        }
    }
    namespace GetShipment {
        namespace Responses {
            export type $200 = /* Response schema. */ Definitions.GetShipmentResponse;
            export type $400 = /* Response schema. */ Definitions.GetShipmentResponse;
            export type $401 = /* Response schema. */ Definitions.GetShipmentResponse;
            export type $403 = /* Response schema. */ Definitions.GetShipmentResponse;
            export type $404 = /* Response schema. */ Definitions.GetShipmentResponse;
            export type $429 = /* Response schema. */ Definitions.GetShipmentResponse;
            export type $500 = /* Response schema. */ Definitions.GetShipmentResponse;
            export type $503 = /* Response schema. */ Definitions.GetShipmentResponse;
        }
    }
    namespace GetShipmentItems {
        namespace Responses {
            export type $200 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $400 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $401 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $403 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $404 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $429 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $500 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $503 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
        }
    }
    namespace GetShipmentItemsByShipmentId {
        namespace Responses {
            export type $200 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $400 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $401 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $403 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $404 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $429 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $500 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
            export type $503 = /* The response schema for the getShipmentItems operation. */ Definitions.GetShipmentItemsResponse;
        }
    }
    namespace GetShipments {
        namespace Responses {
            export type $200 = /* The response schema for the getShipments operation. */ Definitions.GetShipmentsResponse;
            export type $400 = /* The response schema for the getShipments operation. */ Definitions.GetShipmentsResponse;
            export type $401 = /* The response schema for the getShipments operation. */ Definitions.GetShipmentsResponse;
            export type $403 = /* The response schema for the getShipments operation. */ Definitions.GetShipmentsResponse;
            export type $404 = /* The response schema for the getShipments operation. */ Definitions.GetShipmentsResponse;
            export type $429 = /* The response schema for the getShipments operation. */ Definitions.GetShipmentsResponse;
            export type $500 = /* The response schema for the getShipments operation. */ Definitions.GetShipmentsResponse;
            export type $503 = /* The response schema for the getShipments operation. */ Definitions.GetShipmentsResponse;
        }
    }
    namespace GetSmallAndLightEligibilityBySellerSKU {
        namespace Responses {
            export type $200 = /* The Small and Light eligibility status of the item indicated by the specified seller SKU. */ Definitions.SmallAndLightEligibility;
            export type $400 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $403 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $404 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $413 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $415 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $429 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $500 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $503 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
        }
    }
    namespace GetSmallAndLightEnrollmentBySellerSKU {
        namespace Responses {
            export type $200 = /* The Small and Light enrollment status of the item indicated by the specified seller SKU. */ Definitions.SmallAndLightEnrollment;
            export type $400 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $403 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $404 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $413 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $415 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $429 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $500 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $503 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
        }
    }
    namespace GetSmallAndLightFeePreview {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Request schema for submitting items for which to retrieve fee estimates. */ Definitions.SmallAndLightFeePreviewRequest;
        }
        namespace Responses {
            export type $200 = Definitions.SmallAndLightFeePreviews;
            export type $400 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $401 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $403 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $404 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $429 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $500 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $503 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
        }
    }
    namespace GetSolicitationActionsForOrder {
        namespace Responses {
            export type $200 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
            export type $400 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
            export type $403 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
            export type $404 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
            export type $413 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
            export type $415 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
            export type $429 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
            export type $500 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
            export type $503 = /* The response schema for the getSolicitationActionsForOrder operation. */ Definitions.GetSolicitationActionsForOrderResponse;
        }
    }
    namespace GetSubscription {
        namespace Responses {
            export type $200 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $400 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $403 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $404 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $413 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $415 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $429 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $500 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $503 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
        }
    }
    namespace GetSubscriptionById {
        namespace Responses {
            export type $200 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
            export type $400 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
            export type $403 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
            export type $404 = /* The response schema for the getSubscription operation. */ Definitions.GetSubscriptionResponse;
            export type $409 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
            export type $413 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
            export type $415 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
            export type $429 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
            export type $500 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
            export type $503 = /* The response schema for the getSubscriptionById operation. */ Definitions.GetSubscriptionByIdResponse;
        }
    }
    namespace GetTrackingInformation {
        namespace Responses {
            export type $200 = /* The response schema for the getTrackingInformation operation. */ Definitions.GetTrackingInformationResponse;
            export type $400 = /* The response schema for the getTrackingInformation operation. */ Definitions.GetTrackingInformationResponse;
            export type $401 = /* The response schema for the getTrackingInformation operation. */ Definitions.GetTrackingInformationResponse;
            export type $403 = /* The response schema for the getTrackingInformation operation. */ Definitions.GetTrackingInformationResponse;
            export type $404 = /* The response schema for the getTrackingInformation operation. */ Definitions.GetTrackingInformationResponse;
            export type $429 = /* The response schema for the getTrackingInformation operation. */ Definitions.GetTrackingInformationResponse;
            export type $500 = /* The response schema for the getTrackingInformation operation. */ Definitions.GetTrackingInformationResponse;
            export type $503 = /* The response schema for the getTrackingInformation operation. */ Definitions.GetTrackingInformationResponse;
        }
    }
    namespace GetTransportDetails {
        namespace Responses {
            export type $200 = /* The response schema for the getTransportDetails operation. */ Definitions.GetTransportDetailsResponse;
            export type $400 = /* The response schema for the getTransportDetails operation. */ Definitions.GetTransportDetailsResponse;
            export type $401 = /* The response schema for the getTransportDetails operation. */ Definitions.GetTransportDetailsResponse;
            export type $403 = /* The response schema for the getTransportDetails operation. */ Definitions.GetTransportDetailsResponse;
            export type $404 = /* The response schema for the getTransportDetails operation. */ Definitions.GetTransportDetailsResponse;
            export type $429 = /* The response schema for the getTransportDetails operation. */ Definitions.GetTransportDetailsResponse;
            export type $500 = /* The response schema for the getTransportDetails operation. */ Definitions.GetTransportDetailsResponse;
            export type $503 = /* The response schema for the getTransportDetails operation. */ Definitions.GetTransportDetailsResponse;
        }
    }
    namespace ListAllFulfillmentOrders {
        namespace Responses {
            export type $200 = /* The response schema for the listAllFulfillmentOrders operation. */ Definitions.ListAllFulfillmentOrdersResponse;
            export type $400 = /* The response schema for the listAllFulfillmentOrders operation. */ Definitions.ListAllFulfillmentOrdersResponse;
            export type $401 = /* The response schema for the listAllFulfillmentOrders operation. */ Definitions.ListAllFulfillmentOrdersResponse;
            export type $403 = /* The response schema for the listAllFulfillmentOrders operation. */ Definitions.ListAllFulfillmentOrdersResponse;
            export type $404 = /* The response schema for the listAllFulfillmentOrders operation. */ Definitions.ListAllFulfillmentOrdersResponse;
            export type $429 = /* The response schema for the listAllFulfillmentOrders operation. */ Definitions.ListAllFulfillmentOrdersResponse;
            export type $500 = /* The response schema for the listAllFulfillmentOrders operation. */ Definitions.ListAllFulfillmentOrdersResponse;
            export type $503 = /* The response schema for the listAllFulfillmentOrders operation. */ Definitions.ListAllFulfillmentOrdersResponse;
        }
    }
    namespace ListCatalogCategories {
        namespace Responses {
            export type $200 = Definitions.ListCatalogCategoriesResponse;
            export type $400 = Definitions.ListCatalogCategoriesResponse;
            export type $401 = Definitions.ListCatalogCategoriesResponse;
            export type $403 = Definitions.ListCatalogCategoriesResponse;
            export type $404 = Definitions.ListCatalogCategoriesResponse;
            export type $429 = Definitions.ListCatalogCategoriesResponse;
            export type $500 = Definitions.ListCatalogCategoriesResponse;
            export type $503 = Definitions.ListCatalogCategoriesResponse;
        }
    }
    namespace ListCatalogItems {
        namespace Responses {
            export type $200 = Definitions.ListCatalogItemsResponse;
            export type $400 = Definitions.ListCatalogItemsResponse;
            export type $401 = Definitions.ListCatalogItemsResponse;
            export type $403 = Definitions.ListCatalogItemsResponse;
            export type $404 = Definitions.ListCatalogItemsResponse;
            export type $429 = Definitions.ListCatalogItemsResponse;
            export type $500 = Definitions.ListCatalogItemsResponse;
            export type $503 = Definitions.ListCatalogItemsResponse;
        }
    }
    namespace ListFinancialEventGroups {
        namespace Responses {
            export type $200 = /* The response schema for the listFinancialEventGroups operation. */ Definitions.ListFinancialEventGroupsResponse;
            export type $400 = /* The response schema for the listFinancialEventGroups operation. */ Definitions.ListFinancialEventGroupsResponse;
            export type $403 = /* The response schema for the listFinancialEventGroups operation. */ Definitions.ListFinancialEventGroupsResponse;
            export type $404 = /* The response schema for the listFinancialEventGroups operation. */ Definitions.ListFinancialEventGroupsResponse;
            export type $429 = /* The response schema for the listFinancialEventGroups operation. */ Definitions.ListFinancialEventGroupsResponse;
            export type $500 = /* The response schema for the listFinancialEventGroups operation. */ Definitions.ListFinancialEventGroupsResponse;
            export type $503 = /* The response schema for the listFinancialEventGroups operation. */ Definitions.ListFinancialEventGroupsResponse;
        }
    }
    namespace ListFinancialEvents {
        namespace Responses {
            export type $200 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $400 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $403 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $404 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $429 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $500 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $503 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
        }
    }
    namespace ListFinancialEventsByGroupId {
        namespace Responses {
            export type $200 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $400 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $403 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $404 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $429 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $500 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $503 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
        }
    }
    namespace ListFinancialEventsByOrderId {
        namespace Responses {
            export type $200 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $400 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $403 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $404 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $429 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $500 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
            export type $503 = /* The response schema for the listFinancialEvents operation. */ Definitions.ListFinancialEventsResponse;
        }
    }
    namespace ListReturnReasonCodes {
        namespace Responses {
            export type $200 = /* The response schema for the listReturnReasonCodes operation. */ Definitions.ListReturnReasonCodesResponse;
            export type $400 = /* The response schema for the listReturnReasonCodes operation. */ Definitions.ListReturnReasonCodesResponse;
            export type $401 = /* The response schema for the listReturnReasonCodes operation. */ Definitions.ListReturnReasonCodesResponse;
            export type $403 = /* The response schema for the listReturnReasonCodes operation. */ Definitions.ListReturnReasonCodesResponse;
            export type $404 = /* The response schema for the listReturnReasonCodes operation. */ Definitions.ListReturnReasonCodesResponse;
            export type $429 = /* The response schema for the listReturnReasonCodes operation. */ Definitions.ListReturnReasonCodesResponse;
            export type $500 = /* The response schema for the listReturnReasonCodes operation. */ Definitions.ListReturnReasonCodesResponse;
            export type $503 = /* The response schema for the listReturnReasonCodes operation. */ Definitions.ListReturnReasonCodesResponse;
        }
    }
    namespace PurchaseLabels {
        export interface BodyParameters {
            body: /**
             * example:
             * {
             *   "rateId": "rate identifier",
             *   "labelSpecification": {
             *     "labelFormat": "PNG",
             *     "labelStockSize": "4x6"
             *   }
             * }
             */
            Parameters.Body;
        }
        namespace Parameters {
            /**
             * example:
             * {
             *   "rateId": "rate identifier",
             *   "labelSpecification": {
             *     "labelFormat": "PNG",
             *     "labelStockSize": "4x6"
             *   }
             * }
             */
            export type Body = /* The request schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsResponse;
            export type $400 = /* The response schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsResponse;
            export type $401 = /* The response schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsResponse;
            export type $403 = /* The response schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsResponse;
            export type $404 = /* The response schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsResponse;
            export type $429 = /* The response schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsResponse;
            export type $500 = /* The response schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsResponse;
            export type $503 = /* The response schema for the purchaseLabels operation. */ Definitions.PurchaseLabelsResponse;
        }
    }
    namespace PurchaseShipment {
        export interface BodyParameters {
            body: /**
             * example:
             * {
             *   "clientReferenceId": "911-7267646-6348616",
             *   "shipFrom": {
             *     "name": "test name 1",
             *     "addressLine1": "some Test address 1",
             *     "postalCode": "90013",
             *     "city": "Los Angeles",
             *     "countryCode": "US",
             *     "stateOrRegion": "CA",
             *     "email": "testEmail1@amazon.com",
             *     "phoneNumber": "1234567890"
             *   },
             *   "shipTo": {
             *     "name": "test name 2",
             *     "addressLine1": "some Test address 2",
             *     "postalCode": "90013",
             *     "city": "Los Angeles",
             *     "countryCode": "US",
             *     "stateOrRegion": "CA",
             *     "email": "testEmail2@amazon.com",
             *     "phoneNumber": "1234567890"
             *   },
             *   "containers": [
             *     {
             *       "containerType": "PACKAGE",
             *       "containerReferenceId": "ContainerRefId-01",
             *       "items": [
             *         {
             *           "title": "String",
             *           "quantity": 2,
             *           "unitPrice": {
             *             "unit": "USD",
             *             "value": 14.99
             *           },
             *           "unitWeight": {
             *             "unit": "lb",
             *             "value": 0.08164656
             *           }
             *         }
             *       ],
             *       "dimensions": {
             *         "height": 12,
             *         "length": 36,
             *         "width": 15,
             *         "unit": "CM"
             *       },
             *       "weight": {
             *         "unit": "lb",
             *         "value": 0.08164656
             *       },
             *       "value": {
             *         "unit": "USD",
             *         "value": 29.98
             *       }
             *     }
             *   ],
             *   "labelSpecification": {
             *     "labelFormat": "PNG",
             *     "labelStockSize": "4x6"
             *   },
             *   "serviceType": "Amazon Shipping Standard"
             * }
             */
            Parameters.Body;
        }
        namespace Parameters {
            /**
             * example:
             * {
             *   "clientReferenceId": "911-7267646-6348616",
             *   "shipFrom": {
             *     "name": "test name 1",
             *     "addressLine1": "some Test address 1",
             *     "postalCode": "90013",
             *     "city": "Los Angeles",
             *     "countryCode": "US",
             *     "stateOrRegion": "CA",
             *     "email": "testEmail1@amazon.com",
             *     "phoneNumber": "1234567890"
             *   },
             *   "shipTo": {
             *     "name": "test name 2",
             *     "addressLine1": "some Test address 2",
             *     "postalCode": "90013",
             *     "city": "Los Angeles",
             *     "countryCode": "US",
             *     "stateOrRegion": "CA",
             *     "email": "testEmail2@amazon.com",
             *     "phoneNumber": "1234567890"
             *   },
             *   "containers": [
             *     {
             *       "containerType": "PACKAGE",
             *       "containerReferenceId": "ContainerRefId-01",
             *       "items": [
             *         {
             *           "title": "String",
             *           "quantity": 2,
             *           "unitPrice": {
             *             "unit": "USD",
             *             "value": 14.99
             *           },
             *           "unitWeight": {
             *             "unit": "lb",
             *             "value": 0.08164656
             *           }
             *         }
             *       ],
             *       "dimensions": {
             *         "height": 12,
             *         "length": 36,
             *         "width": 15,
             *         "unit": "CM"
             *       },
             *       "weight": {
             *         "unit": "lb",
             *         "value": 0.08164656
             *       },
             *       "value": {
             *         "unit": "USD",
             *         "value": 29.98
             *       }
             *     }
             *   ],
             *   "labelSpecification": {
             *     "labelFormat": "PNG",
             *     "labelStockSize": "4x6"
             *   },
             *   "serviceType": "Amazon Shipping Standard"
             * }
             */
            export type Body = /* The payload schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentResponse;
            export type $400 = /* The response schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentResponse;
            export type $401 = /* The response schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentResponse;
            export type $403 = /* The response schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentResponse;
            export type $404 = /* The response schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentResponse;
            export type $429 = /* The response schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentResponse;
            export type $500 = /* The response schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentResponse;
            export type $503 = /* The response schema for the purchaseShipment operation. */ Definitions.PurchaseShipmentResponse;
        }
    }
    namespace PutSmallAndLightEnrollmentBySellerSKU {
        namespace Responses {
            export type $200 = /* The Small and Light enrollment status of the item indicated by the specified seller SKU. */ Definitions.SmallAndLightEnrollment;
            export type $400 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $403 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $404 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $413 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $415 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $429 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $500 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
            export type $503 = /* A list of error responses returned when a request is unsuccessful. */ Definitions.ErrorList;
        }
    }
    namespace PutTransportDetails {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for a putTransportDetails operation. */ Definitions.PutTransportDetailsRequest;
        }
        namespace Responses {
            export type $200 = /* Workflow status for a shipment with an Amazon-partnered carrier. */ Definitions.PutTransportDetailsResponse;
            export type $400 = /* Workflow status for a shipment with an Amazon-partnered carrier. */ Definitions.PutTransportDetailsResponse;
            export type $401 = /* Workflow status for a shipment with an Amazon-partnered carrier. */ Definitions.PutTransportDetailsResponse;
            export type $403 = /* Workflow status for a shipment with an Amazon-partnered carrier. */ Definitions.PutTransportDetailsResponse;
            export type $404 = /* Workflow status for a shipment with an Amazon-partnered carrier. */ Definitions.PutTransportDetailsResponse;
            export type $429 = /* Workflow status for a shipment with an Amazon-partnered carrier. */ Definitions.PutTransportDetailsResponse;
            export type $500 = /* Workflow status for a shipment with an Amazon-partnered carrier. */ Definitions.PutTransportDetailsResponse;
            export type $503 = /* Workflow status for a shipment with an Amazon-partnered carrier. */ Definitions.PutTransportDetailsResponse;
        }
    }
    namespace RescheduleAppointmentForServiceJobByServiceJobId {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Input for rescheduled appointment operation. */ Definitions.RescheduleAppointmentRequest;
        }
        namespace Responses {
            export type $200 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $400 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $403 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $404 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $413 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $415 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $422 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $429 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $500 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
            export type $503 = /* Response schema for add or reschedule appointment operation. */ Definitions.SetAppointmentResponse;
        }
    }
    namespace RetrieveShippingLabel {
        export interface BodyParameters {
            body: /**
             * example:
             * {
             *   "labelSpecification": {
             *     "labelFormat": "PNG",
             *     "labelStockSize": "4x6"
             *   }
             * }
             */
            Parameters.Body;
        }
        namespace Parameters {
            /**
             * example:
             * {
             *   "labelSpecification": {
             *     "labelFormat": "PNG",
             *     "labelStockSize": "4x6"
             *   }
             * }
             */
            export type Body = /* The request schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelResponse;
            export type $400 = /* The response schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelResponse;
            export type $401 = /* The response schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelResponse;
            export type $403 = /* The response schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelResponse;
            export type $404 = /* The response schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelResponse;
            export type $429 = /* The response schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelResponse;
            export type $500 = /* The response schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelResponse;
            export type $503 = /* The response schema for the retrieveShippingLabel operation. */ Definitions.RetrieveShippingLabelResponse;
        }
    }
    namespace UpdateFulfillmentOrder {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.UpdateFulfillmentOrderRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for the updateFulfillmentOrder operation. */ Definitions.UpdateFulfillmentOrderResponse;
            export type $400 = /* The response schema for the updateFulfillmentOrder operation. */ Definitions.UpdateFulfillmentOrderResponse;
            export type $401 = /* The response schema for the updateFulfillmentOrder operation. */ Definitions.UpdateFulfillmentOrderResponse;
            export type $403 = /* The response schema for the updateFulfillmentOrder operation. */ Definitions.UpdateFulfillmentOrderResponse;
            export type $404 = /* The response schema for the updateFulfillmentOrder operation. */ Definitions.UpdateFulfillmentOrderResponse;
            export type $429 = /* The response schema for the updateFulfillmentOrder operation. */ Definitions.UpdateFulfillmentOrderResponse;
            export type $500 = /* The response schema for the updateFulfillmentOrder operation. */ Definitions.UpdateFulfillmentOrderResponse;
            export type $503 = /* The response schema for the updateFulfillmentOrder operation. */ Definitions.UpdateFulfillmentOrderResponse;
        }
    }
    namespace UpdateInboundShipment {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* The request schema for an inbound shipment. */ Definitions.InboundShipmentRequest;
        }
        namespace Responses {
            export type $200 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $400 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $401 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $403 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $404 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $429 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $500 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
            export type $503 = /* The response schema for this operation. */ Definitions.InboundShipmentResponse;
        }
    }
    namespace VoidTransport {
        namespace Responses {
            export type $200 = /* The response schema for the voidTransport operation. */ Definitions.VoidTransportResponse;
            export type $400 = /* The response schema for the voidTransport operation. */ Definitions.VoidTransportResponse;
            export type $401 = /* The response schema for the voidTransport operation. */ Definitions.VoidTransportResponse;
            export type $403 = /* The response schema for the voidTransport operation. */ Definitions.VoidTransportResponse;
            export type $404 = /* The response schema for the voidTransport operation. */ Definitions.VoidTransportResponse;
            export type $429 = /* The response schema for the voidTransport operation. */ Definitions.VoidTransportResponse;
            export type $500 = /* The response schema for the voidTransport operation. */ Definitions.VoidTransportResponse;
            export type $503 = /* The response schema for the voidTransport operation. */ Definitions.VoidTransportResponse;
        }
    }
}
export default Definitions 
