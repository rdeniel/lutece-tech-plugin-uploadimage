<%@ page errorPage="../../ErrorPage.jsp" %>

<jsp:include page="../../AdminHeader.jsp" />

<jsp:useBean id="manageuploadimage" scope="session" class="fr.paris.lutece.plugins.uploadimage.web.ManageUploadimageJspBean" />

<%= manageuploadimage.getViewOptions(request)%>

<%@ include file="../../AdminFooter.jsp" %>
